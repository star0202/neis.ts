import { DefaultParamWithSchoolParam } from '.'

export interface SchoolMajorinfoParam extends DefaultParamWithSchoolParam {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM?: string
  /** 계열명 */
  readonly ORD_SC_NM?: string
}
