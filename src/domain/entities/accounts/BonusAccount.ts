import { BaseAccount } from './BaseAccount'
import { AccountType } from '@shared/enums/AccountType'
import { ITransaction } from '@shared/types/Transaction'
import { TransactionType } from '@shared/enums/TransactionType'

export class BonusAccount extends BaseAccount {
  private readonly _bonusRate: number = 0.1

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber, AccountType.BONUS)
  }

  get bonusRate(): number {
    return this._bonusRate
  }

  getAccountInfo(): Record<string, unknown> {
    return {
      name: this.name,
      accountNumber: this.accountNumber,
      type: this.accountType,
      status: this.status,
      balance: this.getBalance(),
      bonusRate: this._bonusRate,
      transactionCount: this.getTransactions().length,
    }
  }

  deposit(amount: number): ITransaction {
    this.validateOperation(amount)

    const bonus = amount * this._bonusRate
    const totalAmount = amount + bonus

    this.addToBalance(totalAmount)

    const depositTransaction = this.recordTransaction(
      TransactionType.DEPOSIT,
      amount,
      `Depósito de R$ ${amount.toFixed(2)}`
    )

    if (bonus > 0) {
      this.recordTransaction(
        TransactionType.BONUS,
        bonus,
        `Bônus de R$ ${bonus.toFixed(2)} (${(this._bonusRate * 100).toFixed(0)}%)`
      )
    }

    return depositTransaction
  }
}
