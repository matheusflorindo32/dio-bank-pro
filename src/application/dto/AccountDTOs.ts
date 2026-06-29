export interface DepositDTO {
  accountNumber: number
  amount: number
}

export interface WithdrawDTO {
  accountNumber: number
  amount: number
}

export interface LoanDTO {
  accountNumber: number
  amount: number
}

export interface CreateAccountDTO {
  name: string
  accountType: 'PERSONAL' | 'COMPANY' | 'BONUS'
  initialBalance?: number
}
