import { NeisRequest } from './http'
import { MealServiceDietInfo, SchoolInfo } from './types'
import { Logger } from 'tslog'

export class Neis extends NeisRequest {
  constructor(config: {
    KEY?: string
    Type?: 'json' | 'xml'
    pIndex?: number
    pSize?: number
    logger?: Logger<unknown>
  }) {
    super({ Type: 'json', pIndex: 1, pSize: 10, ...config })
  }

  async schoolInfo(
    ATPT_OFCDC_SC_CODE?: string,
    SD_SCHUL_CODE?: string
  ): Promise<SchoolInfo[]> {
    const data = await this.request<SchoolInfo>('GET', 'schoolInfo', {
      ATPT_OFCDC_SC_CODE,
      SD_SCHUL_CODE,
    })

    return data
  }

  async mealServiceDietInfo(
    ATPT_OFCDC_SC_CODE?: string,
    SD_SCHUL_CODE?: string,
    MLSV_YMD?: string
  ): Promise<MealServiceDietInfo[]> {
    const data = await this.request<MealServiceDietInfo>(
      'GET',
      'mealServiceDietInfo',
      {
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
        MLSV_YMD,
      }
    )

    return data
  }
}
