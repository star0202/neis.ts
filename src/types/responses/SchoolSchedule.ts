import { BaseSchoolResponse } from '.'

export interface SchoolScheduleResponse extends BaseSchoolResponse {
  /** 학년도 */
  readonly AY: string
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string | null
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM: string
  /** 수업공제일명 */
  readonly SBTR_DD_SC_NM: string
  /** 학사일자 */
  readonly AA_YMD: string
  /** 행사명 */
  readonly EVENT_NM: string
  /** 행사내용 */
  readonly EVENT_CNTNT: string
  /** 1학년행사여부 */
  readonly ONE_GRADE_EVENT_YN: string
  /** 2학년행사여부 */
  readonly TW_GRADE_EVENT_YN: string
  /** 3학년행사여부 */
  readonly THREE_GRADE_EVENT_YN: string
  /** 4학년행사여부 */
  readonly FR_GRADE_EVENT_YN: string
  /** 5학년행사여부 */
  readonly FIV_GRADE_EVENT_YN: string
  /** 6학년행사여부 */
  readonly SIX_GRADE_EVENT_YN: string
  /** 수정일 */
  readonly LOAD_DTM: string
}
