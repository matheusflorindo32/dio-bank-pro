import { AccountStatus } from '../enums/AccountStatus'
import { AccountType } from '../enums/AccountType'

export interface IAccount {
  readonly name: string
  readonly accountNumber: number
  readonly accountType: AccountType
  status: AccountStatus
  getBalance(): number
  activate(): void
  deactivate(): void
}
