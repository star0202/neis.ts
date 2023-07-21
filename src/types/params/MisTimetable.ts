import type { ElsTimetableParam } from './ElsTimetable'

export type MisTimetableParam = {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
} & ElsTimetableParam
