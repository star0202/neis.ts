import type { DefaultParamWithSchoolParam } from '.'

export type MealServiceDietInfoParam = {
  /** 식사코드 */
  readonly MMEAL_SC_CODE?: string
  /** 급식일자 */
  readonly MLSV_YMD?: string
  /** 급식시작일자 */
  readonly MLSV_FROM_YMD?: string
  /** 급식종료일자 */
  readonly MLSV_TO_YMD?: string
} & DefaultParamWithSchoolParam
