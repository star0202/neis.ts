import { BaseSchoolResponse } from '.'

export interface MealServiceDietInfoResponse extends BaseSchoolResponse {
  /** 식사코드 */
  readonly MMEAL_SC_CODE: string
  /** 식사명 */
  readonly MMEAL_SC_NM: string
  /** 급식일자 */
  readonly MLSV_YMD: string
  /** 급식인원수 */
  readonly MLSV_FGR: number
  /** 요리명 */
  readonly DDISH_NM: string
  /** 원산지정보 */
  readonly ORPLC_INFO: string
  /** 칼로리정보 */
  readonly CAL_INFO: string
  /** 영양정보 */
  readonly NTR_INFO: string
  /** 급식시작일자 */
  readonly MLSV_FROM_YMD: string
  /** 급식종료일자 */
  readonly MLSV_TO_YMD: string
}
