import { NeisRequest } from '../http'
import { MealInfo, MealRequestParam, SchoolInfo } from '../types'

/** 학교 정보를 담는 클래스입니다. */
export class School implements SchoolInfo {
  ATPT_OFCDC_SC_CODE: string
  ATPT_OFCDC_SC_NM: string
  SD_SCHUL_CODE: string
  SCHUL_NM: string
  ENG_SCHUL_NM: string
  SCHUL_KND_SC_NM: string
  LCTN_SC_NM: string
  JU_ORG_NM: string
  FOND_SC_NM: string
  ORG_RDNZC: string
  ORG_RDNMA: string
  ORG_RDNDA: string
  ORG_TELNO: string
  HMPG_ADRES: string
  COEDU_SC_NM: string
  ORG_FAXNO: string
  HS_SC_NM: string | null
  INDST_SPECL_CCCCL_EXST_YN: string
  HS_GNRL_BUSNS_SC_NM: string
  SPCLY_PURPS_HS_ORD_NM: string | null
  ENE_BFE_SEHF_SC_NM: string
  DGHT_SC_NM: string
  FOND_YMD: string
  FOAS_MEMRD: string
  LOAD_DTM: string

  #neis: NeisRequest

  constructor(neis: NeisRequest, info: SchoolInfo) {
    this.ATPT_OFCDC_SC_CODE = info.ATPT_OFCDC_SC_CODE
    this.ATPT_OFCDC_SC_NM = info.ATPT_OFCDC_SC_NM
    this.SD_SCHUL_CODE = info.SD_SCHUL_CODE
    this.SCHUL_NM = info.SCHUL_NM
    this.ENG_SCHUL_NM = info.ENG_SCHUL_NM
    this.SCHUL_KND_SC_NM = info.SCHUL_KND_SC_NM
    this.LCTN_SC_NM = info.LCTN_SC_NM
    this.JU_ORG_NM = info.JU_ORG_NM
    this.FOND_SC_NM = info.FOND_SC_NM
    this.ORG_RDNZC = info.ORG_RDNZC
    this.ORG_RDNMA = info.ORG_RDNMA
    this.ORG_RDNDA = info.ORG_RDNDA
    this.ORG_TELNO = info.ORG_TELNO
    this.HMPG_ADRES = info.HMPG_ADRES
    this.COEDU_SC_NM = info.COEDU_SC_NM
    this.ORG_FAXNO = info.ORG_FAXNO
    this.HS_SC_NM = info.HS_SC_NM || null
    this.INDST_SPECL_CCCCL_EXST_YN = info.INDST_SPECL_CCCCL_EXST_YN
    this.HS_GNRL_BUSNS_SC_NM = info.HS_GNRL_BUSNS_SC_NM
    this.SPCLY_PURPS_HS_ORD_NM = info.SPCLY_PURPS_HS_ORD_NM || null
    this.ENE_BFE_SEHF_SC_NM = info.ENE_BFE_SEHF_SC_NM
    this.DGHT_SC_NM = info.DGHT_SC_NM
    this.FOND_YMD = info.FOND_YMD
    this.FOAS_MEMRD = info.FOAS_MEMRD
    this.LOAD_DTM = info.LOAD_DTM

    this.#neis = neis
  }

  async getMeal(params: MealRequestParam): Promise<MealInfo[]> {
    return await this.#neis.mealServiceDietInfoRaw({
      ATPT_OFCDC_SC_CODE: this.ATPT_OFCDC_SC_CODE,
      SD_SCHUL_CODE: this.SD_SCHUL_CODE,
      ...params,
    })
  }

  async getMealOne(params: MealRequestParam): Promise<MealInfo> {
    return await this.#neis
      .mealServiceDietInfoRaw({
        ATPT_OFCDC_SC_CODE: this.ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE: this.SD_SCHUL_CODE,
        ...params,
      })
      .then((data) => data[0])
  }
}
