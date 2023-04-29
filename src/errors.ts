abstract class NeisError extends Error {
  constructor(code: string, msg: string) {
    super(`${code} ${msg}`)
    this.name = this.constructor.name
  }
}

export class MissingRequiredValueError extends NeisError {}

export class AuthenticationError extends NeisError {}

export class ServiceNotFoundError extends NeisError {}

export class InvalidLocationValueError extends NeisError {}

export class RequestLimitExceededError extends NeisError {}

export class DailyTrafficLimitExceededError extends NeisError {}

export class ServerError extends NeisError {}

export class DatabaseConnectionError extends NeisError {}

export class SQLStatementError extends NeisError {}

export class LimitUseAuthenticationKeyError extends NeisError {}

export class DataNotFoundError extends NeisError {}

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
} satisfies Record<string, typeof NeisError>
