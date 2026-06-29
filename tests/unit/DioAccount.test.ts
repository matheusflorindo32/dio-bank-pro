import { describe, it, expect, beforeEach } from 'vitest'
import { DioAccount } from '@domain/entities/accounts/DioAccount'
import { AccountStatus } from '@shared/enums/AccountStatus'
import {
  InvalidAmountError,
  InactiveAccountError,
  InsufficientBalanceError,
} from '@domain/errors/DomainError'

describe('DioAccount', () => {
  let account: DioAccount

  beforeEach(() => {
    account = new DioAccount('João Silva', 123456)
    account.activate()
  })

  it('should create account with correct initial state', () => {
    const newAccount = new DioAccount('Test', 999999)
    expect(newAccount.name).toBe('Test')
    expect(newAccount.accountNumber).toBe(999999)
    expect(newAccount.getBalance()).toBe(0)
    expect(newAccount.status).toBe(AccountStatus.INACTIVE)
  })

  it('should deposit successfully', () => {
    const transaction = account.deposit(1000)
    expect(account.getBalance()).toBe(1000)
    expect(transaction.amount).toBe(1000)
    expect(transaction.type).toBe('DEPOSIT')
  })

  it('should throw error for negative or zero deposit', () => {
    expect(() => account.deposit(0)).toThrow(InvalidAmountError)
    expect(() => account.deposit(-100)).toThrow(InvalidAmountError)
  })

  it('should throw error for deposit on inactive account', () => {
    account.deactivate()
    expect(() => account.deposit(100)).toThrow(InactiveAccountError)
  })

  it('should withdraw successfully', () => {
    account.deposit(1000)
    const transaction = account.withdraw(300)
    expect(account.getBalance()).toBe(700)
    expect(transaction.amount).toBe(300)
    expect(transaction.type).toBe('WITHDRAW')
  })

  it('should throw error for insufficient balance', () => {
    account.deposit(100)
    expect(() => account.withdraw(200)).toThrow(InsufficientBalanceError)
  })

  it('should throw error for negative or zero withdrawal', () => {
    expect(() => account.withdraw(0)).toThrow(InvalidAmountError)
    expect(() => account.withdraw(-50)).toThrow(InvalidAmountError)
  })

  it('should throw error for withdrawal on inactive account', () => {
    account.deposit(500)
    account.deactivate()
    expect(() => account.withdraw(100)).toThrow(InactiveAccountError)
  })

  it('should track transaction history', () => {
    account.deposit(1000)
    account.withdraw(200)
    const history = account.getTransactionHistory()
    expect(history).toHaveLength(2)
  })

  it('should return correct account info', () => {
    const info = account.getAccountInfo()
    expect(info.name).toBe('João Silva')
    expect(info.accountNumber).toBe(123456)
    expect(info.type).toBe('PERSONAL')
  })
})