import { NeisRequest } from '../http'
import { EleMidSchoolInfo, HighSchoolInfo, MealInfo } from '../types'

/** 초중학교 정보를 담는 클래스입니다. */
export class EleMidSchool implements EleMidSchoolInfo {
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
  INDST_SPECL_CCCCL_EXST_YN: string
  HS_GNRL_BUSNS_SC_NM: string
  SPCLY_PURPS_HS_ORD_NM: string | null
  ENE_BFE_SEHF_SC_NM: string
  DGHT_SC_NM: string
  FOND_YMD: string
  FOAS_MEMRD: string
  LOAD_DTM: string

  #neis: NeisRequest

  constructor(neis: NeisRequest, info: EleMidSchoolInfo) {
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

  async getMeal(date: string): Promise<MealInfo | MealInfo[]> {
    const data = await this.#neis.mealServiceDietInfoRaw(
      this.ATPT_OFCDC_SC_CODE,
      this.SD_SCHUL_CODE,
      date
    )

    if (data.length === 1) return data[0]

    return data
  }
}

/** 고등학교 정보를 담는 클래스입니다. */
export class HighSchool extends EleMidSchool implements HighSchoolInfo {
  HS_SC_NM: string

  constructor(neis: NeisRequest, info: HighSchoolInfo) {
    super(neis, info)
    this.HS_SC_NM = info.HS_SC_NM
  }
}

export type School = EleMidSchool | HighSchool
