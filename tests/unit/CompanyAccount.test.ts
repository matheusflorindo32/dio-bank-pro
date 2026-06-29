import { describe, it, expect, beforeEach } from 'vitest'
import { CompanyAccount } from '@domain/entities/accounts/CompanyAccount'
import { LoanNotAllowedError } from '@domain/errors/DomainError'

describe('CompanyAccount', () => {
  let account: CompanyAccount

  beforeEach(() => {
    account = new CompanyAccount('Tech Solutions', 100001, 10000)
    account.activate()
  })

  it('should create company account with loan limit', () => {
    expect(account.loanLimit).toBe(10000)
    expect(account.totalLoaned).toBe(0)
    expect(account.availableLoan).toBe(10000)
  })

  it('should take loan successfully', () => {
    account.deposit(1000)
    const transaction = account.takeLoan(3000)
    expect(account.getBalance()).toBe(4000)
    expect(account.totalLoaned).toBe(3000)
    expect(account.availableLoan).toBe(7000)
    expect(transaction.type).toBe('LOAN')
  })

  it('should throw error for loan exceeding limit', () => {
    account.deposit(100)
    expect(() => account.takeLoan(15000)).toThrow(LoanNotAllowedError)
  })

  it('should throw error for loan on inactive account', () => {
    account.deactivate()
    expect(() => account.takeLoan(1000)).toThrow()
  })

  it('should track multiple loans', () => {
    account.deposit(500)
    account.takeLoan(2000)
    account.takeLoan(3000)
    expect(account.totalLoaned).toBe(5000)
    expect(account.availableLoan).toBe(5000)
  })

  it('should return correct account info with loan details', () => {
    const info = account.getAccountInfo()
    expect(info.loanLimit).toBe(10000)
    expect(info.totalLoaned).toBe(0)
    expect(info.availableLoan).toBe(10000)
  })
})
