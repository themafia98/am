export enum LogLevel {
  Info  = 'info',
  Warn  = 'warn',
  Error = 'error',
}

export type LogMeta = Record<string, unknown>

export interface Logger {
  info: (msg: string, meta?: LogMeta) => void
  warn: (msg: string, meta?: LogMeta) => void
  error: (msg: string, meta?: LogMeta) => void
}

function emit(level: LogLevel, msg: string, meta?: LogMeta): void {
  const entry = JSON.stringify({ ts: new Date().toISOString(), level, msg, ...meta })
  if (level === LogLevel.Error) console.error(entry)
  else if (level === LogLevel.Warn) console.warn(entry)
  else console.log(entry)
}

export const logger: Logger = {
  info:  (msg, meta) => emit(LogLevel.Info, msg, meta),
  warn:  (msg, meta) => emit(LogLevel.Warn, msg, meta),
  error: (msg, meta) => emit(LogLevel.Error, msg, meta),
}
