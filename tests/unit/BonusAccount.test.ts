import { describe, it, expect, beforeEach } from 'vitest'
import { BonusAccount } from '@domain/entities/accounts/BonusAccount'

describe('BonusAccount', () => {
  let account: BonusAccount

  beforeEach(() => {
    account = new BonusAccount('Maria Santos', 200001)
    account.activate()
  })

  it('should create bonus account with 10% bonus rate', () => {
    expect(account.bonusRate).toBe(0.1)
  })

  it('should deposit with bonus', () => {
    const transaction = account.deposit(1000)
    expect(account.getBalance()).toBe(1100)
    expect(transaction.amount).toBe(1000)
  })

  it('should create bonus transaction record', () => {
    account.deposit(500)
    const history = account.getTransactionHistory()
    expect(history).toHaveLength(2)
    expect(history[1].type).toBe('BONUS')
    expect(history[1].amount).toBe(50)
  })

  it('should deposit with correct balance for various amounts', () => {
    account.deposit(100)
    expect(account.getBalance()).toBe(110)

    account.deposit(200)
    expect(account.getBalance()).toBe(330)
  })

  it('should withdraw normally', () => {
    account.deposit(1000)
    account.withdraw(300)
    expect(account.getBalance()).toBe(800)
  })

  it('should return correct account info with bonus rate', () => {
    const info = account.getAccountInfo()
    expect(info.bonusRate).toBe(0.1)
  })
})
