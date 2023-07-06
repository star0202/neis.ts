import { BaseSchoolResponse } from '.'

export interface SchoolInfoResponse extends BaseSchoolResponse {
  /** 영문학교명 */
  readonly ENG_SCHUL_NM: string
  /** 학교종류명 */
  readonly SCHUL_KND_SC_NM: '초등학교' | '중학교' | '고등학교' | '특수학교'
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
