import type { BaseSchoolResponse } from '.'

export type ElsTimetableResponse = {
  /** 학년도 */
  readonly AY: string
  /** 학기 */
  readonly SEM: string
  /** 시간표일자 */
  readonly ALL_TI_YMD: string
  /** 학년 */
  readonly GRADE: string
  /** 반명 */
  readonly CLASS_NM: string
  /** 교시 */
  readonly PERIO: string
  /** 수업내용 */
  readonly ITRT_CNTNT: string
  /** 수정일 */
  readonly LOAD_DTM: string
} & BaseSchoolResponse
