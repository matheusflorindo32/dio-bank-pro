import { BaseAccount } from '@domain/entities/accounts/BaseAccount'
import { IAccountRepository } from '@domain/repositories/IAccountRepository'
import { AccountNotFoundError } from '@domain/errors/DomainError'
import { ITransaction } from '@shared/types/Transaction'
import { DepositDTO, WithdrawDTO } from '../dto/AccountDTOs'

export class TransactionService {
  constructor(private readonly repository: IAccountRepository) {}

  deposit(dto: DepositDTO): ITransaction {
    const account = this.getAccount(dto.accountNumber)
    const transaction = account.deposit(dto.amount)
    this.repository.save(account)
    return transaction
  }

  withdraw(dto: WithdrawDTO): ITransaction {
    const account = this.getAccount(dto.accountNumber)
    const transaction = account.withdraw(dto.amount)
    this.repository.save(account)
    return transaction
  }

  getTransactionHistory(accountNumber: number): ReadonlyArray<ITransaction> {
    const account = this.getAccount(accountNumber)
    return account.getTransactionHistory()
  }

  getBalance(accountNumber: number): number {
    const account = this.getAccount(accountNumber)
    return account.getBalance()
  }

  private getAccount(accountNumber: number): BaseAccount {
    const account = this.repository.findByAccountNumber(accountNumber)
    if (!account) {
      throw new AccountNotFoundError(accountNumber)
    }
    return account
  }
}
