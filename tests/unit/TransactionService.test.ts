import { describe, it, expect, beforeEach } from 'vitest'
import { TransactionService } from '@application/services/TransactionService'
import { AccountService } from '@application/services/AccountService'
import { AccountRepository } from '@infrastructure/repositories/AccountRepository'
import {
  InsufficientBalanceError,
  InactiveAccountError,
} from '@domain/errors/DomainError'

describe('TransactionService', () => {
  let transactionService: TransactionService
  let accountService: AccountService
  let repository: AccountRepository

  beforeEach(() => {
    repository = new AccountRepository()
    transactionService = new TransactionService(repository)
    accountService = new AccountService(repository)
  })

  it('should deposit to account', () => {
    const account = accountService.createAccount({ name: 'João', accountType: 'PERSONAL' })
    account.activate()
    accountService.activateAccount(account.accountNumber)

    const tx = transactionService.deposit({ accountNumber: account.accountNumber, amount: 1000 })
    expect(tx.amount).toBe(1000)
    expect(transactionService.getBalance(account.accountNumber)).toBe(1000)
  })

  it('should withdraw from account', () => {
    const account = accountService.createAccount({
      name: 'João',
      accountType: 'PERSONAL',
      initialBalance: 1000,
    })
    accountService.activateAccount(account.accountNumber)

    const tx = transactionService.withdraw({ accountNumber: account.accountNumber, amount: 300 })
    expect(tx.amount).toBe(300)
    expect(transactionService.getBalance(account.accountNumber)).toBe(700)
  })

  it('should throw error for insufficient balance', () => {
    const account = accountService.createAccount({
      name: 'João',
      accountType: 'PERSONAL',
      initialBalance: 100,
    })
    accountService.activateAccount(account.accountNumber)

    expect(() =>
      transactionService.withdraw({ accountNumber: account.accountNumber, amount: 200 })
    ).toThrow(InsufficientBalanceError)
  })

  it('should throw error for inactive account', () => {
    const account = accountService.createAccount({ name: 'João', accountType: 'PERSONAL' })

    expect(() =>
      transactionService.deposit({ accountNumber: account.accountNumber, amount: 100 })
    ).toThrow(InactiveAccountError)
  })

  it('should return transaction history', () => {
    const account = accountService.createAccount({
      name: 'João',
      accountType: 'PERSONAL',
      initialBalance: 2000,
    })
    accountService.activateAccount(account.accountNumber)

    transactionService.deposit({ accountNumber: account.accountNumber, amount: 500 })
    transactionService.withdraw({ accountNumber: account.accountNumber, amount: 200 })

    const history = transactionService.getTransactionHistory(account.accountNumber)
    expect(history).toHaveLength(3)
  })
})
