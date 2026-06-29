import { BaseAccount } from '@domain/entities/accounts/BaseAccount'
import { DioAccount } from '@domain/entities/accounts/DioAccount'
import { CompanyAccount } from '@domain/entities/accounts/CompanyAccount'
import { BonusAccount } from '@domain/entities/accounts/BonusAccount'
import { IAccountRepository } from '@domain/repositories/IAccountRepository'
import { AccountNotFoundError } from '@domain/errors/DomainError'
import { generateAccountNumber } from '@shared/utils/formatters'
import { CreateAccountDTO } from '../dto/AccountDTOs'

export class AccountService {
  constructor(private readonly repository: IAccountRepository) {}

  createAccount(dto: CreateAccountDTO): BaseAccount {
    const accountNumber = generateAccountNumber()

    let account: BaseAccount

    switch (dto.accountType) {
      case 'PERSONAL':
        account = new DioAccount(dto.name, accountNumber)
        break
      case 'COMPANY':
        account = new CompanyAccount(dto.name, accountNumber)
        break
      case 'BONUS':
        account = new BonusAccount(dto.name, accountNumber)
        break
      default:
        throw new Error(`Tipo de conta inválido: ${dto.accountType}`)
    }

    if (dto.initialBalance && dto.initialBalance > 0) {
      account.activate()
      account.deposit(dto.initialBalance)
    }

    this.repository.save(account)
    return account
  }

  getAccount(accountNumber: number): BaseAccount {
    const account = this.repository.findByAccountNumber(accountNumber)
    if (!account) {
      throw new AccountNotFoundError(accountNumber)
    }
    return account
  }

  getAllAccounts(): BaseAccount[] {
    return this.repository.findAll()
  }

  activateAccount(accountNumber: number): BaseAccount {
    const account = this.getAccount(accountNumber)
    account.activate()
    this.repository.save(account)
    return account
  }

  deactivateAccount(accountNumber: number): BaseAccount {
    const account = this.getAccount(accountNumber)
    account.deactivate()
    this.repository.save(account)
    return account
  }

  deleteAccount(accountNumber: number): boolean {
    return this.repository.delete(accountNumber)
  }
}
