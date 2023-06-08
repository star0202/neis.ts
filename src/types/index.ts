import { DefaultParam } from './params'
import type { Logger } from 'tslog'

export * from './params'
export * from './responses'

export interface NeisConfig extends DefaultParam {
  /** tslog Logger */
  readonly logger?: Logger<unknown>
  /** Timeout in milliseconds */
  readonly timeout?: number
}
