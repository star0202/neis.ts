import { AcaInsTiInfoParam } from './AcaInsTiInfo'
import { ClassInfoParam } from './ClassInfo'
import { ElsTimetableParam } from './ElsTimetable'
import { HisTimetableParam } from './HisTimetable'
import { MealServiceDietInfoParam } from './MealServiceDietInfo'
import { MisTimetableParam } from './MisTimetable'
import { SchoolInfoParam } from './SchoolInfo'
import { SchoolMajorinfoParam } from './SchoolMajorinfo'
import { SchoolScheduleParam } from './SchoolSchedule'
import { SchulAflcoinfoParam } from './SchulAflcoinfo'
import { SpsTimetableParam } from './SpsTimetable'
import { TiClrminfoParam } from './TiClrminfo'

export * from './AcaInsTiInfo'
export * from './ClassInfo'
export * from './ElsTimetable'
export * from './HisTimetable'
export * from './MealServiceDietInfo'
export * from './MisTimetable'
export * from './SchoolInfo'
export * from './SchoolMajorinfo'
export * from './SchoolSchedule'
export * from './SchulAflcoinfo'
export * from './SpsTimetable'
export * from './TiClrminfo'

export type Params =
  | SchoolInfoParam
  | MealServiceDietInfoParam
  | SchoolScheduleParam
  | AcaInsTiInfoParam
  | ElsTimetableParam
  | MisTimetableParam
  | HisTimetableParam
  | SpsTimetableParam
  | ClassInfoParam
  | SchoolMajorinfoParam
  | SchulAflcoinfoParam
  | TiClrminfoParam

export interface DefaultParam {
  /** 인증키 */
  readonly key?: string
  /** 호출 문서(xml, json) */
  readonly type?: 'json' | 'xml'
  /** 페이지 위치 */
  readonly pIndex?: number
  /** 페이지 당 신청 숫자 */
  readonly pSize?: number
}

export interface DefaultParamWithSchoolParam extends DefaultParam {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string
  /** 표준학교코드 */
  readonly SD_SCHUL_CODE: string
}

export interface BaseTimetableParam extends DefaultParamWithSchoolParam {
  /** 학년도 */
  readonly AY?: string
  /** 학기 */
  readonly SEM?: string
  /** 시간표일자 */
  readonly ALL_TI_YMD?: string
  /** 학년 */
  readonly GRADE?: string
  /** 반명 */
  readonly CLASS_NM?: string
  /** 시간표시작일자 */
  readonly TI_FROM_YMD?: string
  /** 시간표종료일자 */
  readonly TI_TO_YMD?: string
}
