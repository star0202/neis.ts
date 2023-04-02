import {
  MealInfo,
  MealRequestConfig,
  NeisConfig,
  SchoolInfo,
  SchoolRequestConfig,
} from './types'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Logger } from 'tslog'

export class NeisRequest {
  private readonly rest: AxiosInstance
  private readonly baseURL = 'https://open.neis.go.kr/hub'

  private readonly logger?: Logger<unknown>

  constructor(
    private readonly config: NeisConfig & {
      Type: 'json' | 'xml'
      pIndex: number
      pSize: number
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

      if (data.RESULT) {
        this.logger?.error(`${data.RESULT.CODE} ${data.RESULT.MESSAGE}`)

        throw new Error(`${data.RESULT.CODE} ${data.RESULT.MESSAGE}`)
      }

      return Object.values((Object.values(data) as object[][])[0][1])[0] as T[]
    } catch (error) {
      this.config.logger?.error(error)

      throw error
    }
  }

  async schoolInfoRaw(config: SchoolRequestConfig): Promise<SchoolInfo[]> {
    return await this.request<SchoolInfo>('GET', 'schoolInfo', config)
  }

  async mealServiceDietInfoRaw(
    config: MealRequestConfig & {
      ATPT_OFCDC_SC_CODE: string
      SD_SCHUL_CODE: string
    }
  ): Promise<MealInfo[]> {
    return await this.request<MealInfo>('GET', 'mealServiceDietInfo', config)
  }
}
