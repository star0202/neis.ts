import type { ElsTimetableResponse } from './ElsTimetable'

export type SpsTimetableResponse = {
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM: string
  /** 강의실명 */
  readonly CLRM_NM: string
} & ElsTimetableResponse
