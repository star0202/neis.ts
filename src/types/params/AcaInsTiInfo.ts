import type { DefaultParam } from '.'

export type AcaInsTiInfoParam = {
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
} & DefaultParam
