/** 학교기본정보 인터페이스 */
export interface SchoolInfo {
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE: string
  /** 시도교육청명 */
  ATPT_OFCDC_SC_NM: string
  /** 표준학교코드 */
  SD_SCHUL_CODE: string
  /** 학교명 */
  SCHUL_NM: string
  /** 영문학교명 */
  ENG_SCHUL_NM: string
  /** 학교종류명 */
  SCHUL_KND_SC_NM: string
  /** 소재지명 */
  LCTN_SC_NM: string
  /** 관할조직명 */
  JU_ORG_NM: string
  /** 설립명 */
  FOND_SC_NM: string
  /** 도로명우편번호 */
  ORG_RDNZC: string
  /** 도로명주소 */
  ORG_RDNMA: string
  /** 도로명상세주소 */
  ORG_RDNDA: string
  /** 전화번호 */
  ORG_TELNO: string
  /** 홈페이지주소 */
  HMPG_ADRES: string
  /** 남녀공학구분명 */
  COEDU_SC_NM: string
  /** 팩스번호 */
  ORG_FAXNO: string
  /** 고등학교구분명 */
  HS_SC_NM: string | null
  /** 산업체특별학급존재여부 */
  INDST_SPECL_CCCCL_EXST_YN: string
  /** 고등학교일반실업구분명 */
  HS_GNRL_BUSNS_SC_NM: string
  /** 특수목적고등학교계열명 */
  SPCLY_PURPS_HS_ORD_NM: string | null
  /** 입시전후기구분명 */
  ENE_BFE_SEHF_SC_NM: string
  /** 주야구분명 */
  DGHT_SC_NM: string
  /** 설립일자 */
  FOND_YMD: string
  /** 개교기념일 */
  FOAS_MEMRD: string
  /** 수정일 */
  LOAD_DTM: string
}

/** 급식식단정보 인터페이스 */
export interface MealServiceDietInfo {
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE: string
  /** 시도교육청명 */
  ATPT_OFCDC_SC_NM: string
  /** 표준학교코드 */
  SD_SCHUL_CODE: string
  /** 학교명 */
  SCHUL_NM: string
  /** 식사코드 */
  MMEAL_SC_CODE: string
  /** 식사명 */
  MMEAL_SC_NM: string
  /** 급식일자 */
  MLSV_YMD: string
  /** 급식인원수 */
  MLSV_FGR: string
  /** 요리명 */
  DDISH_NM: string
  /** 원산지정보 */
  ORPLC_INFO: string
  /** 칼로리정보 */
  CAL_INFO: string
  /** 영양정보 */
  NTR_INFO: string
  /** 급식시작일자 */
  MLSV_FROM_YMD: string
  /** 급식종료일자 */
  MLSV_TO_YMD: string
}
