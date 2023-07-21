class NeisError extends Error {}

export class RequestTimeoutError extends NeisError {
  constructor(timeout: number) {
    super(`Request timed out after ${timeout}ms`)
    this.name = this.constructor.name
  }
}

class HTTPError extends NeisError {
  constructor(code: string, msg: string) {
    super(`${code} ${msg}`)
    this.name = this.constructor.name
  }
}

export class MissingRequiredValueError extends HTTPError {}

export class AuthenticationError extends HTTPError {}

export class ServiceNotFoundError extends HTTPError {}

export class InvalidLocationValueError extends HTTPError {}

export class RequestLimitExceededError extends HTTPError {}

export class DailyTrafficLimitExceededError extends HTTPError {}

export class ServerError extends HTTPError {}

export class DatabaseConnectionError extends HTTPError {}

export class SQLStatementError extends HTTPError {}

export class LimitUseAuthenticationKeyError extends HTTPError {}

export class DataNotFoundError extends HTTPError {}

export type ErrorCode =
  | 'ERROR-300'
  | 'ERROR-290'
  | 'ERROR-310'
  | 'ERROR-333'
  | 'ERROR-336'
  | 'ERROR-337'
  | 'ERROR-500'
  | 'ERROR-600'
  | 'ERROR-601'
  | 'INFO-300'
  | 'INFO-200'

export const ErrorsMapping = {
  'ERROR-300': MissingRequiredValueError,
  'ERROR-290': AuthenticationError,
  'ERROR-310': ServiceNotFoundError,
  'ERROR-333': InvalidLocationValueError,
  'ERROR-336': RequestLimitExceededError,
  'ERROR-337': DailyTrafficLimitExceededError,
  'ERROR-500': ServerError,
  'ERROR-600': DatabaseConnectionError,
  'ERROR-601': SQLStatementError,
  'INFO-300': LimitUseAuthenticationKeyError,
  'INFO-200': DataNotFoundError,
} satisfies Record<ErrorCode, typeof HTTPError>
