import { IAccount } from '@shared/types/Account'
import { ITransaction } from '@shared/types/Transaction'
import { AccountStatus } from '@shared/enums/AccountStatus'
import { AccountType } from '@shared/enums/AccountType'
import { TransactionType } from '@shared/enums/TransactionType'
import {
  InsufficientBalanceError,
  InactiveAccountError,
  InvalidAmountError,
  AccountClosedError,
} from '@domain/errors/DomainError'
import { Transaction } from '../transactions/Transaction'

export abstract class BaseAccount implements IAccount {
  private _balance: number = 0
  private _status: AccountStatus = AccountStatus.INACTIVE
  private readonly _transactions: ITransaction[] = []

  constructor(
    public readonly name: string,
    public readonly accountNumber: number,
    public readonly accountType: AccountType
  ) {}

  get status(): AccountStatus {
    return this._status
  }

  set status(value: AccountStatus) {
    this._status = value
  }

  getBalance(): number {
    return this._balance
  }

  getTransactions(): ReadonlyArray<ITransaction> {
    return Object.freeze([...this._transactions])
  }

  getTransactionHistory(): ReadonlyArray<ITransaction> {
    return this.getTransactions()
  }

  activate(): void {
    this._status = AccountStatus.ACTIVE
  }

  deactivate(): void {
    this._status = AccountStatus.INACTIVE
  }

  protected validateOperation(amount: number): void {
    if (amount <= 0) {
      throw new InvalidAmountError()
    }
    if (this._status === AccountStatus.CLOSED) {
      throw new AccountClosedError()
    }
    if (this._status !== AccountStatus.ACTIVE) {
      throw new InactiveAccountError()
    }
  }

  protected addToBalance(amount: number): void {
    this._balance += amount
  }

  protected subtractFromBalance(amount: number): void {
    if (this._balance < amount) {
      throw new InsufficientBalanceError(this._balance, amount)
    }
    this._balance -= amount
  }

  protected recordTransaction(
    type: TransactionType,
    amount: number,
    description?: string
  ): ITransaction {
    const transaction = new Transaction(type, amount, this._balance, description)
    this._transactions.push(transaction)
    return transaction
  }

  deposit(amount: number): ITransaction {
    this.validateOperation(amount)
    this.addToBalance(amount)
    return this.recordTransaction(TransactionType.DEPOSIT, amount)
  }

  withdraw(amount: number): ITransaction {
    this.validateOperation(amount)
    this.subtractFromBalance(amount)
    return this.recordTransaction(TransactionType.WITHDRAW, amount)
  }

  abstract getAccountInfo(): Record<string, unknown>
}
