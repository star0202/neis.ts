import type { Logger } from 'tslog'

export interface NeisConfig {
  /** NEIS API KEY */
  readonly KEY?: string
  /** 호출 문서(xml, json) */
  readonly Type?: 'json' | 'xml'
  /** 페이지 번호 */
  readonly pIndex?: number
  /** 페이지 당 신청 숫자 */
  readonly pSize?: number
  /** tslog Logger */
  readonly logger?: Logger<unknown>
}

interface SchoolBaseParam {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE?: string
  /** 표준학교코드 */
  readonly SD_SCHUL_CODE?: string
}

export interface SchoolRequestParam extends SchoolBaseParam {
  /** 학교명 */
  readonly SCHUL_NM?: string
  /** 학교종류명 */
  readonly SCHUL_KND_SC_NM?: string
  /** 소재지명 */
  readonly LCTN_SC_NM?: string
  /** 설립명 */
  readonly FOND_SC_NM?: string
}

export interface MealRequestParam extends SchoolBaseParam {
  /** 식사코드 */
  readonly MMEAL_SC_CODE?: string
  /** 급식일자 */
  readonly MLSV_YMD?: string
  /** 급식시작일자 */
  readonly MLSV_FROM_YMD?: string
  /** 급식종료일자 */
  readonly MLSV_TO_YMD?: string
}

export interface ScheduleRequestParam extends SchoolBaseParam {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM?: string
  /** 학사일자 */
  readonly AA_YMD?: string
  /** 학사시작일자 */
  readonly AA_FROM_YMD?: string
  /** 학사종료일자 */
  readonly AA_TO_YMD?: string
}

export type RequestParams =
  | SchoolRequestParam
  | MealRequestParam
  | ScheduleRequestParam

interface BaseResponse {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM: string
  /** 표준학교코드 */
  readonly SD_SCHUL_CODE: string
  /** 학교명 */
  readonly SCHUL_NM: string
}

export interface SchoolResponse extends BaseResponse {
  /** 영문학교명 */
  readonly ENG_SCHUL_NM: string
  /** 학교종류명 */
  readonly SCHUL_KND_SC_NM: string
  /** 소재지명 */
  readonly LCTN_SC_NM: string
  /** 관할조직명 */
  readonly JU_ORG_NM: string
  /** 설립명 */
  readonly FOND_SC_NM: string
  /** 도로명우편번호 */
  readonly ORG_RDNZC: string
  /** 도로명주소 */
  readonly ORG_RDNMA: string
  /** 도로명상세주소 */
  readonly ORG_RDNDA: string
  /** 전화번호 */
  readonly ORG_TELNO: string
  /** 홈페이지주소 */
  readonly HMPG_ADRES: string
  /** 남녀공학구분명 */
  readonly COEDU_SC_NM: string
  /** 팩스번호 */
  readonly ORG_FAXNO: string
  /** 특수목적고등학교계열명 */
  readonly HS_SC_NM: string | null
  /** 산업체특별학급존재여부 */
  readonly INDST_SPECL_CCCCL_EXST_YN: string
  /** 고등학교일반실업구분명 */
  readonly HS_GNRL_BUSNS_SC_NM: string
  /** 특수목적고등학교계열명 */
  readonly SPCLY_PURPS_HS_ORD_NM: string | null
  /** 입시전후기구분명 */
  readonly ENE_BFE_SEHF_SC_NM: string
  /** 주야구분명 */
  readonly DGHT_SC_NM: string
  /** 설립일자 */
  readonly FOND_YMD: string
  /** 개교기념일 */
  readonly FOAS_MEMRD: string
  /** 수정일 */
  readonly LOAD_DTM: string
}

export interface MealResponse extends BaseResponse {
  /** 식사코드 */
  readonly MMEAL_SC_CODE: string
  /** 식사명 */
  readonly MMEAL_SC_NM: string
  /** 급식일자 */
  readonly MLSV_YMD: string
  /** 급식인원수 */
  readonly MLSV_FGR: string
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

export interface ScheduleResponse extends BaseResponse {
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
  readonly TWO_GRADE_EVENT_YN: string
  /** 3학년행사여부 */
  readonly THREE_GRADE_EVENT_YN: string
  /** 4학년행사여부 */
  readonly FOUR_GRADE_EVENT_YN: string
  /** 5학년행사여부 */
  readonly FIVE_GRADE_EVENT_YN: string
  /** 6학년행사여부 */
  readonly SIX_GRADE_EVENT_YN: string
  /** 수정일 */
  readonly LOAD_DTM: string
}
