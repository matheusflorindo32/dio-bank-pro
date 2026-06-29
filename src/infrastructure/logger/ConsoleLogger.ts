export interface ILogger {
  info(message: string, meta?: Record<string, unknown>): void
  error(message: string, meta?: Record<string, unknown>): void
  warn(message: string, meta?: Record<string, unknown>): void
  debug(message: string, meta?: Record<string, unknown>): void
}

export class ConsoleLogger implements ILogger {
  info(message: string, meta?: Record<string, unknown>): void {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, meta ? JSON.stringify(meta) : '')
  }

  error(message: string, meta?: Record<string, unknown>): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, meta ? JSON.stringify(meta) : '')
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, meta ? JSON.stringify(meta) : '')
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`, meta ? JSON.stringify(meta) : '')
  }
}
