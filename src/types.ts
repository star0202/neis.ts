import type { Logger } from 'tslog'

export interface NeisConfig extends DefaultParam {
  /** tslog Logger */
  readonly logger?: Logger<unknown>
}

interface DefaultParam {
  /** 인증키 */
  readonly key?: string
  /** 호출 문서(xml, json) */
  readonly type?: 'json' | 'xml'
  /** 페이지 위치 */
  readonly pIndex?: number
  /** 페이지 당 신청 숫자 */
  readonly pSize?: number
}

interface DefaultParamWithSchoolParam extends DefaultParam {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string
  /** 표준학교코드 */
  readonly SD_SCHUL_CODE: string
}

export interface SchoolInfoParam extends DefaultParam {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE?: string
  /** 표준학교코드 */
  readonly SD_SCHUL_CODE?: string
  /** 학교명 */
  readonly SCHUL_NM?: string
  /** 학교종류명 */
  readonly SCHUL_KND_SC_NM?: string
  /** 소재지명 */
  readonly LCTN_SC_NM?: string
  /** 설립명 */
  readonly FOND_SC_NM?: string
}

export interface MealServiceDietInfoParam extends DefaultParamWithSchoolParam {
  /** 식사코드 */
  readonly MMEAL_SC_CODE?: string
  /** 급식일자 */
  readonly MLSV_YMD?: string
  /** 급식시작일자 */
  readonly MLSV_FROM_YMD?: string
  /** 급식종료일자 */
  readonly MLSV_TO_YMD?: string
}

export interface SchoolScheduleParam extends DefaultParamWithSchoolParam {
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

export interface AcaInsTiInfoParam extends DefaultParam {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string
  /** 행정구역명 */
  readonly ADMST_ZONE_NM?: string
  /** 학원지정번호 */
  readonly ACA_ASNUM?: string
  /** 학원명 */
  readonly ACA_NM?: string
  /** 분야명 */
  readonly REALM_SC_NM?: string
  /** 교습계열명 */
  readonly LE_ORD_NM?: string
  /** 교습과정명 */
  readonly LE_CRSE_NM?: string
}

interface BaseTimetableParam extends DefaultParamWithSchoolParam {
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

export interface ElsTimetableParam extends BaseTimetableParam {
  /** 교시 */
  readonly PERIO?: string
}

export interface MisTimetableParam extends ElsTimetableParam {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
}

export interface HisTimetableParam extends BaseTimetableParam {
  /** 계열명 */
  readonly ORD_SC_NM?: string
  /** 학과명 */
  readonly DDDEP_NM?: string
  /** 강의실명 */
  readonly CLRM_NM?: string
}

export interface SpsTimetableParam extends ElsTimetableParam {
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM?: string
  /** 강의실명 */
  readonly CLRM_NM?: string
}

export interface ClassInfoParam extends DefaultParamWithSchoolParam {
  /** 학년도 */
  readonly AY?: string
  /** 학년 */
  readonly GRADE?: string
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM?: string
  /** 계열명 */
  readonly ORD_SC_NM?: string
  /** 학과명 */
  readonly DDDEP_NM?: string
}

export interface SchoolMajorinfoParam extends DefaultParamWithSchoolParam {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
  /** 계열명 */
  readonly ORD_SC_NM?: string
}

export interface SchulAflcoinfoParam extends DefaultParamWithSchoolParam {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
}

export interface TiClrminfoParam extends DefaultParamWithSchoolParam {
  /** 학년도 */
  readonly AY?: string
  /** 학년 */
  readonly GRADE?: string
  /** 학기 */
  readonly SEM?: string
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM?: string
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
  /** 계열명 */
  readonly ORD_SC_NM?: string
  /** 학과명 */
  readonly DDDEP_NM?: string
}

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

interface BaseSchoolResponse {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM: string
  /** 표준학교코드 */
  readonly SD_SCHUL_CODE: string
  /** 학교명 */
  readonly SCHUL_NM: string
}

export interface SchoolInfoResponse extends BaseSchoolResponse {
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

export interface MealServiceDietInfoResponse extends BaseSchoolResponse {
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

export interface AcaInsTiInfoResponse {
  /** 시도교육청코드 */
  readonly ATPT_OFCDC_SC_CODE: string
  /** 시도교육청명 */
  readonly ATPT_OFCDC_SC_NM: string
  /** 행정구역명 */
  readonly ADMST_ZONE_NM: string
  /** 학원교습소명 */
  readonly ACA_INSTI_SC_NM: string
  /** 학원지정번호 */
  readonly ACA_ASNUM: string
  /** 학원명 */
  readonly ACA_NM: string
  /** 개설일자 */
  readonly ESTBL_YMD: string
  /** 등록일자 */
  readonly REG_YMD: string
  /** 등록상태명 */
  readonly REG_STTUS_NM: string
  /** 휴원시작일자 */
  readonly CAA_BEGIN_YMD: string | null
  /** 휴원종료일자 */
  readonly CAA_END_YMD: string | null
  /** 정원합계 */
  readonly TOFOR_SMTOT: string
  /** 일시수용능력인원합계 */
  readonly DTM_RCPTN_ABLTY_NMPR_SMTOT: string
  /** 분야명 */
  readonly REALM_SC_NM: string
  /** 교습계열명 */
  readonly LE_ORD_NM: string
  /** 교습과정목록명 */
  readonly LE_CRSE_LIST_NM: string
  /** 교습과정명 */
  readonly LE_CRSE_NM: string
  /** 인당수강료내용 */
  readonly PSNBY_THCC_CNTNT: string | null
  /** 수강료공개여부 */
  readonly THCC_OTHBC_YN: string
  /** 기숙사학원여부 */
  readonly BRHS_ACA_YN: string
  /** 도로명우편번호 */
  readonly FA_RDNZC: string
  /** 도로명주소 */
  readonly FA_RDNMA: string
  /** 도로명상세주소 */
  readonly FA_RDNDA: string
  /** 수정일 */
  readonly LOAD_DTM: string
}

export interface ElsTimetableResponse extends BaseSchoolResponse {
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
}

export interface MisTimetableResponse extends ElsTimetableResponse {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string
}

export interface HisTimetableResponse extends MisTimetableResponse {
  /** 계열명 */
  readonly ORD_SC_NM: string
  /** 학과명 */
  readonly DDDEP_NM: string
  /** 강의실명 */
  readonly CLRM_NM: string
}

export interface SpsTimetableResponse extends ElsTimetableResponse {
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM: string
  /** 강의실명 */
  readonly CLRM_NM: string
}

export interface ClassInfoResponse extends BaseSchoolResponse {
  /** 학년도 */
  readonly AY: string
  /** 학년 */
  readonly GRADE: string
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string | null
  /** 학교과정명 */
  readonly SCHUL_CRSE_SC_NM: string
  /** 계열명 */
  readonly ORD_SC_NM: string | null
  /** 학과명 */
  readonly DDDEP_NM: string | null
  /** 반명 */
  readonly CLASS_NM: string
  /** 수정일 */
  readonly LOAD_DTM: string
}

export interface SchoolMajorinfoResponse extends BaseSchoolResponse {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string
  /** 계열명 */
  readonly ORD_SC_NM: string
  /** 학과명 */
  readonly DDDEP_NM: string
  /** 수정일 */
  readonly LOAD_DTM: string
}

export interface SchulAflcoinfoResponse extends BaseSchoolResponse {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string
  /** 계열명 */
  readonly ORD_SC_NM: string
  /** 수정일 */
  readonly LOAD_DTM: string
}

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
