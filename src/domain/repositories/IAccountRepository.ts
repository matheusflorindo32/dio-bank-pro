import { BaseAccount } from '@domain/entities/accounts/BaseAccount'

export interface IAccountRepository {
  save(account: BaseAccount): void
  findByAccountNumber(accountNumber: number): BaseAccount | undefined
  findByName(name: string): BaseAccount[]
  findAll(): BaseAccount[]
  delete(accountNumber: number): boolean
  exists(accountNumber: number): boolean
}
