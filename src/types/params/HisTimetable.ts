import { BaseTimetableParam } from '.'

export interface HisTimetableParam extends BaseTimetableParam {
  /** 계열명 */
  readonly ORD_SC_NM?: string
  /** 학과명 */
  readonly DDDEP_NM?: string
  /** 강의실명 */
  readonly CLRM_NM?: string
}
