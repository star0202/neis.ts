import { BaseSchoolResponse } from '.'

export interface SchulAflcoinfoResponse extends BaseSchoolResponse {
  /** 주야과정명 */
  readonly DGHT_CRSE_SC_NM: string
  /** 계열명 */
  readonly ORD_SC_NM: string
  /** 수정일 */
  readonly LOAD_DTM: string
}
