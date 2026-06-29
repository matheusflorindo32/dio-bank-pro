import { BaseAccount } from '@domain/entities/accounts/BaseAccount'
import { IAccountRepository } from '@domain/repositories/IAccountRepository'

export class AccountRepository implements IAccountRepository {
  private accounts: Map<number, BaseAccount> = new Map()

  save(account: BaseAccount): void {
    this.accounts.set(account.accountNumber, account)
  }

  findByAccountNumber(accountNumber: number): BaseAccount | undefined {
    return this.accounts.get(accountNumber)
  }

  findByName(name: string): BaseAccount[] {
    return Array.from(this.accounts.values()).filter(
      account => account.name.toLowerCase().includes(name.toLowerCase())
    )
  }

  findAll(): BaseAccount[] {
    return Array.from(this.accounts.values())
  }

  delete(accountNumber: number): boolean {
    return this.accounts.delete(accountNumber)
  }

  exists(accountNumber: number): boolean {
    return this.accounts.has(accountNumber)
  }

  clear(): void {
    this.accounts.clear()
  }
}
