export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date)
}

export const generateAccountNumber = (): number => {
  return Math.floor(100000 + Math.random() * 900000)
}

export const generateTransactionId = (): string => {
  return `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}
