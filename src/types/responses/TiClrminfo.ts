import { BaseSchoolResponse } from '.'

export interface TiClrminfoResponse extends BaseSchoolResponse {
  /** 학년도 */
  readonly AY: string
  /** 학년 */
  readonly GRADE: string
  /** 학기 */
  readonly SEM: string
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM: string
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string
  /** 계열명 */
  readonly ORD_SC_NM: string
  /** 학과명 */
  readonly DDDEP_NM: string
  /** 강의실명 */
  readonly CLRM_NM: string
  /** 수정일 */
  readonly LOAD_DTM: string
}
