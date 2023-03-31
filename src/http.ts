import { MealServiceDietInfo, SchoolInfo } from './types'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Logger } from 'tslog'

export class NeisRequest {
  private readonly rest: AxiosInstance
  private readonly baseURL = 'https://open.neis.go.kr/hub'

  private readonly logger?: Logger<unknown>

  constructor(
    private readonly config: {
      KEY?: string
      Type: 'json' | 'xml'
      pIndex: number
      pSize: number
      logger?: Logger<unknown>
    }
  ) {
    this.rest = axios.create({
      baseURL: this.baseURL,
    })

    this.logger = config.logger

    if (!config.KEY) this.logger?.warn('No API key provided, using sample key')
  }

  private async request<T>(
    method: string,
    endpoint: string,
    params: object
  ): Promise<T[]> {
    const config: AxiosRequestConfig = {
      method: method,
      url: endpoint,
      params: {
        KEY: this.config.KEY,
        Type: this.config.Type,
        pIndex: this.config.pIndex,
        pSize: this.config.pSize,
        ...params,
      },
    }

    try {
      this.logger?.debug(`${method} /${config.url}`, config.params)

      const { data } = await this.rest.request(config)

      if (data.RESULT)
        throw new Error(`${data.RESULT.CODE} ${data.RESULT.MESSAGE}`)

      return Object.values((Object.values(data) as object[][])[0][1])[0] as T[]
    } catch (error) {
      this.config.logger?.error(error)

      throw error
    }
  }

  async schoolInfoRaw(
    ATPT_OFCDC_SC_CODE?: string,
    SD_SCHUL_CODE?: string
  ): Promise<SchoolInfo[]> {
    const data = await this.request<SchoolInfo>('GET', 'schoolInfo', {
      ATPT_OFCDC_SC_CODE,
      SD_SCHUL_CODE,
    })

    return data
  }

  async mealServiceDietInfoRaw(
    ATPT_OFCDC_SC_CODE: string,
    SD_SCHUL_CODE: string,
    MLSV_YMD: string
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
