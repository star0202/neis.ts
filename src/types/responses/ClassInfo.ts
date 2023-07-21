import type { BaseSchoolResponse } from '.'

export type ClassInfoResponse = {
  /** 학년도 */
  readonly AY: string
  /** 학년 */
  readonly GRADE: string
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string | null
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM: string
  /** 계열명 */
  readonly ORD_SC_NM: string | null
  /** 학과명 */
  readonly DDDEP_NM: string | null
  /** 반명 */
  readonly CLASS_NM: string
  /** 수정일 */
  readonly LOAD_DTM: string
} & BaseSchoolResponse
