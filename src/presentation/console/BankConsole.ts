import { AccountService } from '@application/services/AccountService'
import { TransactionService } from '@application/services/TransactionService'
import { LoanService } from '@application/services/LoanService'
import { AccountRepository } from '@infrastructure/repositories/AccountRepository'
import { ConsoleLogger } from '@infrastructure/logger/ConsoleLogger'
import { formatCurrency } from '@shared/utils/formatters'

export class BankConsole {
  private accountService: AccountService
  private transactionService: TransactionService
  private loanService: LoanService
  private logger: ConsoleLogger

  constructor() {
    const repository = new AccountRepository()
    this.accountService = new AccountService(repository)
    this.transactionService = new TransactionService(repository)
    this.loanService = new LoanService(repository)
    this.logger = new ConsoleLogger()
  }

  run(): void {
    console.log('\n🏦 DIO Bank Pro - Terminal\n')

    // Criar contas de exemplo
    const personal = this.accountService.createAccount({
      name: 'João Silva',
      accountType: 'PERSONAL',
    })
    personal.activate()
    this.logger.info('Conta pessoal criada', { account: personal.accountNumber })

    const company = this.accountService.createAccount({
      name: 'Tech Solutions Ltda',
      accountType: 'COMPANY',
    })
    company.activate()
    this.logger.info('Conta empresa criada', { account: company.accountNumber })

    const bonus = this.accountService.createAccount({
      name: 'Maria Santos',
      accountType: 'BONUS',
    })
    bonus.activate()
    this.logger.info('Conta bônus criada', { account: bonus.accountNumber })

    // Operações
    console.log('\n📥 Depósitos:')
    this.transactionService.deposit({ accountNumber: personal.accountNumber, amount: 1000 })
    console.log(`  João Silva: +${formatCurrency(1000)}`)

    this.transactionService.deposit({ accountNumber: company.accountNumber, amount: 5000 })
    console.log(`  Tech Solutions: +${formatCurrency(5000)}`)

    this.transactionService.deposit({ accountNumber: bonus.accountNumber, amount: 500 })
    console.log(`  Maria Santos: +${formatCurrency(500)} (com bônus)`)

    console.log('\n📤 Saques:')
    this.transactionService.withdraw({ accountNumber: personal.accountNumber, amount: 200 })
    console.log(`  João Silva: -${formatCurrency(200)}`)

    console.log('\n💰 Empréstimo:')
    this.loanService.takeLoan({ accountNumber: company.accountNumber, amount: 2000 })
    console.log(`  Tech Solutions: +${formatCurrency(2000)} (empréstimo)`)

    // Extratos
    console.log('\n📋 Extratos:')
    this.printStatement(personal.accountNumber)
    this.printStatement(company.accountNumber)
    this.printStatement(bonus.accountNumber)

    console.log('\n✅ Operações concluídas com sucesso!\n')
  }

  private printStatement(accountNumber: number): void {
    const account = this.accountService.getAccount(accountNumber)
    const transactions = this.transactionService.getTransactionHistory(accountNumber)

    console.log(`\n  ${account.name} (Conta: ${account.accountNumber})`)
    console.log(`  Saldo: ${formatCurrency(account.getBalance())}`)
    console.log(`  Transações:`)
    transactions.forEach(tx => {
      console.log(`    - ${tx.description} | ${formatCurrency(tx.amount)} | ${tx.timestamp.toLocaleDateString('pt-BR')}`)
    })
  }
}
