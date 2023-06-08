import { ElsTimetableResponse } from './ElsTimetable'

export interface SpsTimetableResponse extends ElsTimetableResponse {
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM: string
  /** 강의실명 */
  readonly CLRM_NM: string
}
