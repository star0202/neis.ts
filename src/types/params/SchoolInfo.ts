import { DefaultParam } from '.'

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
