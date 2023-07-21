import type { BaseTimetableParam } from '.'

export type HisTimetableParam = {
  /** 계열명 */
  readonly ORD_SC_NM?: string
  /** 학과명 */
  readonly DDDEP_NM?: string
  /** 강의실명 */
  readonly CLRM_NM?: string
} & BaseTimetableParam
