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
