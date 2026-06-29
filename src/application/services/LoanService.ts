import { CompanyAccount } from '@domain/entities/accounts/CompanyAccount'
import { BaseAccount } from '@domain/entities/accounts/BaseAccount'
import { IAccountRepository } from '@domain/repositories/IAccountRepository'
import {
  AccountNotFoundError,
  LoanNotAllowedError,
} from '@domain/errors/DomainError'
import { ITransaction } from '@shared/types/Transaction'
import { LoanDTO } from '../dto/AccountDTOs'

export class LoanService {
  constructor(private readonly repository: IAccountRepository) {}

  takeLoan(dto: LoanDTO): ITransaction {
    const account = this.getAccount(dto.accountNumber)

    if (!(account instanceof CompanyAccount)) {
      throw new LoanNotAllowedError()
    }

    const transaction = account.takeLoan(dto.amount)
    this.repository.save(account)
    return transaction
  }

  getLoanInfo(accountNumber: number): {
    loanLimit: number
    totalLoaned: number
    availableLoan: number
  } {
    const account = this.getAccount(accountNumber)

    if (!(account instanceof CompanyAccount)) {
      throw new LoanNotAllowedError()
    }

    return {
      loanLimit: account.loanLimit,
      totalLoaned: account.totalLoaned,
      availableLoan: account.availableLoan,
    }
  }

  private getAccount(accountNumber: number): BaseAccount {
    const account = this.repository.findByAccountNumber(accountNumber)
    if (!account) {
      throw new AccountNotFoundError(accountNumber)
    }
    return account
  }
}
