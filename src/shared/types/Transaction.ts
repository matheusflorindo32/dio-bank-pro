import { TransactionType } from '../enums/TransactionType'

export interface ITransaction {
  readonly id: string
  readonly type: TransactionType
  readonly amount: number
  readonly timestamp: Date
  readonly description: string
  readonly balanceAfter: number
}
