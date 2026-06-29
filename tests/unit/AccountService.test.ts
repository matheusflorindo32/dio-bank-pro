import { describe, it, expect, beforeEach } from 'vitest'
import { AccountService } from '@application/services/AccountService'
import { AccountRepository } from '@infrastructure/repositories/AccountRepository'
import { AccountNotFoundError } from '@domain/errors/DomainError'

describe('AccountService', () => {
  let service: AccountService
  let repository: AccountRepository

  beforeEach(() => {
    repository = new AccountRepository()
    service = new AccountService(repository)
  })

  it('should create personal account', () => {
    const account = service.createAccount({ name: 'João', accountType: 'PERSONAL' })
    expect(account.name).toBe('João')
    expect(account.accountType).toBe('PERSONAL')
    expect(account.getBalance()).toBe(0)
  })

  it('should create account with initial balance', () => {
    const account = service.createAccount({
      name: 'João',
      accountType: 'PERSONAL',
      initialBalance: 1000,
    })
    expect(account.getBalance()).toBe(1000)
  })

  it('should create company account', () => {
    const account = service.createAccount({ name: 'Empresa', accountType: 'COMPANY' })
    expect(account.accountType).toBe('COMPANY')
  })

  it('should create bonus account', () => {
    const account = service.createAccount({ name: 'Maria', accountType: 'BONUS' })
    expect(account.accountType).toBe('BONUS')
  })

  it('should activate and deactivate account', () => {
    const account = service.createAccount({ name: 'Test', accountType: 'PERSONAL' })
    service.activateAccount(account.accountNumber)
    expect(account.status).toBe('ACTIVE')

    service.deactivateAccount(account.accountNumber)
    expect(account.status).toBe('INACTIVE')
  })

  it('should throw error for non-existent account', () => {
    expect(() => service.getAccount(999999)).toThrow(AccountNotFoundError)
  })

  it('should return all accounts', () => {
    service.createAccount({ name: 'A', accountType: 'PERSONAL' })
    service.createAccount({ name: 'B', accountType: 'COMPANY' })
    const all = service.getAllAccounts()
    expect(all).toHaveLength(2)
  })

  it('should delete account', () => {
    const account = service.createAccount({ name: 'Temp', accountType: 'PERSONAL' })
    const deleted = service.deleteAccount(account.accountNumber)
    expect(deleted).toBe(true)
    expect(() => service.getAccount(account.accountNumber)).toThrow(AccountNotFoundError)
  })
})
