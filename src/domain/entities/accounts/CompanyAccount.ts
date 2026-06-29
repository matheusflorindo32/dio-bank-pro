import { BaseAccount } from './BaseAccount'
import { AccountType } from '@shared/enums/AccountType'
import { ITransaction } from '@shared/types/Transaction'
import { TransactionType } from '@shared/enums/TransactionType'
import { LoanNotAllowedError } from '@domain/errors/DomainError'

export class CompanyAccount extends BaseAccount {
  private _loanLimit: number
  private _totalLoaned: number = 0

  constructor(
    name: string,
    accountNumber: number,
    loanLimit: number = 10000
  ) {
    super(name, accountNumber, AccountType.COMPANY)
    this._loanLimit = loanLimit
  }

  get loanLimit(): number {
    return this._loanLimit
  }

  get totalLoaned(): number {
    return this._totalLoaned
  }

  get availableLoan(): number {
    return this._loanLimit - this._totalLoaned
  }

  getAccountInfo(): Record<string, unknown> {
    return {
      name: this.name,
      accountNumber: this.accountNumber,
      type: this.accountType,
      status: this.status,
      balance: this.getBalance(),
      loanLimit: this._loanLimit,
      totalLoaned: this._totalLoaned,
      availableLoan: this.availableLoan,
      transactionCount: this.getTransactions().length,
    }
  }

  takeLoan(amount: number): ITransaction {
    this.validateOperation(amount)

    if (amount > this.availableLoan) {
      throw new LoanNotAllowedError()
    }

    this.addToBalance(amount)
    this._totalLoaned += amount
    return this.recordTransaction(
      TransactionType.LOAN,
      amount,
      `Empréstimo empresarial de R$ ${amount.toFixed(2)}`
    )
  }
}
