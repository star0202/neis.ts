import type { ElsTimetableResponse } from './ElsTimetable'

export type MisTimetableResponse = {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string
} & ElsTimetableResponse
