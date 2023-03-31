interface BaseInfo {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM: string
  /** 표준학교코드 */
  readonly SD_SCHUL_CODE: string
  /** 학교명 */
  readonly SCHUL_NM: string
}

/** 초중학교 기본 정보 인터페이스 */
export interface EleMidSchoolInfo extends BaseInfo {
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

/**
 * 고등학교 기본 정보 인터페이스
 */
export interface HighSchoolInfo extends EleMidSchoolInfo {
  /** 특수목적고등학교계열명 */
  readonly HS_SC_NM: string
}

/**
 * 학교 기본 정보
 */
export type SchoolInfo = EleMidSchoolInfo | HighSchoolInfo

/** 급식식단정보 인터페이스 */
export interface MealInfo extends BaseInfo {
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
