import { ElsTimetableParam } from './ElsTimetable'

export interface MisTimetableParam extends ElsTimetableParam {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
}
