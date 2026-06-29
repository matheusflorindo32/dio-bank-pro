import { ITransaction } from '@shared/types/Transaction'
import { TransactionType } from '@shared/enums/TransactionType'
import { generateTransactionId } from '@shared/utils/formatters'

export class Transaction implements ITransaction {
  readonly id: string
  readonly type: TransactionType
  readonly amount: number
  readonly timestamp: Date
  readonly description: string
  readonly balanceAfter: number

  constructor(
    type: TransactionType,
    amount: number,
    balanceAfter: number,
    description: string = ''
  ) {
    this.id = generateTransactionId()
    this.type = type
    this.amount = amount
    this.balanceAfter = balanceAfter
    this.timestamp = new Date()
    this.description = description || this.generateDescription(type, amount)
  }

  private generateDescription(type: TransactionType, amount: number): string {
    const descriptions: Record<TransactionType, string> = {
      [TransactionType.DEPOSIT]: `Depósito de R$ ${amount.toFixed(2)}`,
      [TransactionType.WITHDRAW]: `Saque de R$ ${amount.toFixed(2)}`,
      [TransactionType.LOAN]: `Empréstimo de R$ ${amount.toFixed(2)}`,
      [TransactionType.TRANSFER]: `Transferência de R$ ${amount.toFixed(2)}`,
      [TransactionType.FEE]: `Taxa de R$ ${amount.toFixed(2)}`,
      [TransactionType.BONUS]: `Bônus de R$ ${amount.toFixed(2)}`,
    }
    return descriptions[type]
  }
}
