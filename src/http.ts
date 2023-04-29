import { ErrorsMapping } from './errors'
import type {
  AcaInsTiInfoParam,
  AcaInsTiInfoResponse,
  ElsTimetableParam,
  ElsTimetableResponse,
  HisTimetableParam,
  HisTimetableResponse,
  MealServiceDietInfoParam,
  MealServiceDietInfoResponse,
  MisTimetableParam,
  MisTimetableResponse,
  NeisConfig,
  Params,
  SchoolInfoParam,
  SchoolInfoResponse,
  SchoolScheduleParam,
  SchoolScheduleResponse,
  SpsTimetableParam,
  SpsTimetableResponse,
} from './types'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { Logger } from 'tslog'

export class NeisRequest {
  private readonly rest: AxiosInstance
  private readonly baseURL = 'https://open.neis.go.kr/hub'

  private readonly logger?: Logger<unknown>

  private readonly key?: string
  private readonly type: 'json' | 'xml'
  private readonly pIndex: number
  private readonly pSize: number

  constructor(
    config: NeisConfig & Required<Pick<NeisConfig, 'type' | 'pIndex' | 'pSize'>>
  ) {
    this.rest = axios.create({
      baseURL: this.baseURL,
    })

    this.key = config.key
    this.type = config.type
    this.pIndex = config.pIndex
    this.pSize = config.pSize

    this.logger = config.logger?.getSubLogger({ name: 'HTTP' })

    if (!this.key) {
      this.logger?.warn('No key provided, using a sample key.')

      if (this.pIndex !== 1) {
        this.logger?.warn(
          `Using a sample key, pIndex is fixed to 1 from ${this.pIndex}.`
        )

        this.pIndex = 1
      }

      if (this.pSize !== 5) {
        this.logger?.warn(
          `Using a sample key, pSize is fixed to 5 from ${this.pSize}.`
        )

        this.pSize = 5
      }
    }
  }

  protected async schoolInfoRaw(params: SchoolInfoParam) {
    return this.get<SchoolInfoResponse>('schoolInfo', params)
  }

  protected async mealServiceDietInfoRaw(params: MealServiceDietInfoParam) {
    return this.get<MealServiceDietInfoResponse>(
      'mealServiceDietInfo',
      params
    )
  }

  protected async SchoolScheduleRaw(params: SchoolScheduleParam) {
    return this.get<SchoolScheduleResponse>(
      'SchoolSchedule',
      params
    )
  }

  protected async acaInsTiInfoRaw(params: AcaInsTiInfoParam) {
    return this.get<AcaInsTiInfoResponse>(
      'acaInsTiInfo',
      params
    )
  }

  protected async elsTimetableRaw(params: ElsTimetableParam) {
    return this.get<ElsTimetableResponse>(
      'elsTimetable',
      params
    )
  }

  protected async misTimetableRaw(params: MisTimetableParam) {
    return this.get<MisTimetableResponse>(
      'misTimetable',
      params
    )
  }

  protected async hisTimetableRaw(params: HisTimetableParam) {
    return this.get<HisTimetableResponse>(
      'hisTimetable',
      params
    )
  }

  protected async spsTimetableRaw(params: SpsTimetableParam) {
    return this.get<SpsTimetableResponse>(
      'spsTimetable',
      params
    )
  }

	private async get<T>(endpoint: string, params: Params) {
		return this.request<T>('GET', endpoint, params)
	}
  private async request<T>(
    method: string,
    endpoint: string,
    params: Params
  ): Promise<T[]> {
    const config: AxiosRequestConfig = {
      method: method,
      url: endpoint,
      params: {
        KEY: this.key,
        Type: this.type,
        pIndex: this.pIndex,
        pSize: this.pSize,
        ...params,
      },
    }

    this.logger?.debug(`${method} /${config.url}`, config.params)

    const { data } = await this.rest.request(config)

    if (data.RESULT) {
      const code = data.RESULT.CODE as keyof typeof ErrorsMapping
      const err = new ErrorsMapping[code](code, data.RESULT.MESSAGE)

      this.logger?.error(err)

      throw err
    }

    return Object.values((Object.values(data) as object[][])[0][1])[0] as T[]
  }
}
