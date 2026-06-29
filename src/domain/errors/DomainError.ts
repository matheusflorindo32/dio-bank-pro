export abstract class DomainError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number = 400
  ) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export class InsufficientBalanceError extends DomainError {
  constructor(balance: number, requested: number) {
    super(
      `Saldo insuficiente. Disponível: ${balance}, solicitado: ${requested}`,
      'INSUFFICIENT_BALANCE',
      422
    )
  }
}

export class InactiveAccountError extends DomainError {
  constructor() {
    super('Operação não permitida: conta inativa', 'INACTIVE_ACCOUNT', 403)
  }
}

export class InvalidAmountError extends DomainError {
  constructor() {
    super('O valor deve ser maior que zero', 'INVALID_AMOUNT', 400)
  }
}

export class AccountNotFoundError extends DomainError {
  constructor(accountNumber: number) {
    super(`Conta ${accountNumber} não encontrada`, 'ACCOUNT_NOT_FOUND', 404)
  }
}

export class ImmutableFieldError extends DomainError {
  constructor(field: string) {
    super(`O campo ${field} não pode ser alterado`, 'IMMUTABLE_FIELD', 403)
  }
}

export class LoanNotAllowedError extends DomainError {
  constructor() {
    super('Empréstimo não disponível para este tipo de conta', 'LOAN_NOT_ALLOWED', 403)
  }
}

export class AccountClosedError extends DomainError {
  constructor() {
    super('Operação não permitida: conta encerrada', 'ACCOUNT_CLOSED', 403)
  }
}
