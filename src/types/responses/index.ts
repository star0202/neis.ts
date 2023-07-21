import { AcaInsTiInfoResponse } from './AcaInsTiInfo'
import { ClassInfoResponse } from './ClassInfo'
import { ElsTimetableResponse } from './ElsTimetable'
import { HisTimetableResponse } from './HisTimetable'
import { MealServiceDietInfoResponse } from './MealServiceDietInfo'
import { MisTimetableResponse } from './MisTimetable'
import { SchoolInfoResponse } from './SchoolInfo'
import { SchoolMajorinfoResponse } from './SchoolMajorinfo'
import { SchoolScheduleResponse } from './SchoolSchedule'
import { SchulAflcoinfoResponse } from './SchulAflcoinfo'
import { SpsTimetableResponse } from './SpsTimetable'
import { TiClrminfoResponse } from './TiClrminfo'

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

export type Responses =
  | SchoolInfoResponse
  | MealServiceDietInfoResponse
  | SchoolScheduleResponse
  | AcaInsTiInfoResponse
  | ElsTimetableResponse
  | MisTimetableResponse
  | HisTimetableResponse
  | SpsTimetableResponse
  | ClassInfoResponse
  | SchoolMajorinfoResponse
  | SchulAflcoinfoResponse
  | TiClrminfoResponse

export type BaseSchoolResponse = {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM: string
  /** 표준학교코드 */
  readonly SD_SCHUL_CODE: string
  /** 학교명 */
  readonly SCHUL_NM: string
}
