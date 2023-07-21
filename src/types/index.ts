import type { DefaultParam } from './params'
import type { Logger } from 'tslog'

export * from './params'
export * from './responses'

export type NeisConfig = {
  /** tslog Logger */
  readonly logger?: Logger<unknown>
  /** Timeout in milliseconds */
  readonly timeout?: number
} & DefaultParam

export type NeisRequestConfig = NeisConfig &
  Required<Pick<NeisConfig, 'type' | 'pIndex' | 'pSize'>>
