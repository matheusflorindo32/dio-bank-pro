import { describe, it, expect, beforeEach } from 'vitest'
import { LoanService } from '@application/services/LoanService'
import { AccountService } from '@application/services/AccountService'
import { AccountRepository } from '@infrastructure/repositories/AccountRepository'
import { LoanNotAllowedError } from '@domain/errors/DomainError'

describe('LoanService', () => {
  let loanService: LoanService
  let accountService: AccountService
  let repository: AccountRepository

  beforeEach(() => {
    repository = new AccountRepository()
    loanService = new LoanService(repository)
    accountService = new AccountService(repository)
  })

  it('should allow loan for company account', () => {
    const account = accountService.createAccount({
      name: 'Tech Solutions',
      accountType: 'COMPANY',
    })
    accountService.activateAccount(account.accountNumber)
    account.deposit(1000)

    const tx = loanService.takeLoan({ accountNumber: account.accountNumber, amount: 3000 })
    expect(tx.type).toBe('LOAN')
    expect(tx.amount).toBe(3000)
  })

  it('should deny loan for personal account', () => {
    const account = accountService.createAccount({ name: 'João', accountType: 'PERSONAL' })
    accountService.activateAccount(account.accountNumber)

    expect(() =>
      loanService.takeLoan({ accountNumber: account.accountNumber, amount: 1000 })
    ).toThrow(LoanNotAllowedError)
  })

  it('should deny loan for bonus account', () => {
    const account = accountService.createAccount({ name: 'Maria', accountType: 'BONUS' })
    accountService.activateAccount(account.accountNumber)

    expect(() =>
      loanService.takeLoan({ accountNumber: account.accountNumber, amount: 1000 })
    ).toThrow(LoanNotAllowedError)
  })

  it('should return loan info for company account', () => {
    const account = accountService.createAccount({
      name: 'Tech Solutions',
      accountType: 'COMPANY',
    })
    accountService.activateAccount(account.accountNumber)
    account.deposit(500)
    loanService.takeLoan({ accountNumber: account.accountNumber, amount: 2000 })

    const info = loanService.getLoanInfo(account.accountNumber)
    expect(info.loanLimit).toBe(10000)
    expect(info.totalLoaned).toBe(2000)
    expect(info.availableLoan).toBe(8000)
  })
})
