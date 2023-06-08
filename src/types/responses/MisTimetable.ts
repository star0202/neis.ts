import { ElsTimetableResponse } from './ElsTimetable'

export interface MisTimetableResponse extends ElsTimetableResponse {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string
}
