import { BaseAccount } from './BaseAccount'
import { AccountType } from '@shared/enums/AccountType'

export class DioAccount extends BaseAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber, AccountType.PERSONAL)
  }

  getAccountInfo(): Record<string, unknown> {
    return {
      name: this.name,
      accountNumber: this.accountNumber,
      type: this.accountType,
      status: this.status,
      balance: this.getBalance(),
      transactionCount: this.getTransactions().length,
    }
  }
}
