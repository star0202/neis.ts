import { ErrorsMapping, RequestTimeoutError } from './errors'
import type { ErrorCode } from './errors'
import type {
  AcaInsTiInfoParam,
  AcaInsTiInfoResponse,
  ClassInfoParam,
  ClassInfoResponse,
  DefaultParam,
  ElsTimetableParam,
  ElsTimetableResponse,
  HisTimetableParam,
  HisTimetableResponse,
  MealServiceDietInfoParam,
  MealServiceDietInfoResponse,
  MisTimetableParam,
  MisTimetableResponse,
  NeisRequestConfig,
  Params,
  Responses,
  SchoolInfoParam,
  SchoolInfoResponse,
  SchoolMajorinfoParam,
  SchoolMajorinfoResponse,
  SchoolScheduleParam,
  SchoolScheduleResponse,
  SchulAflcoinfoParam,
  SchulAflcoinfoResponse,
  SpsTimetableParam,
  SpsTimetableResponse,
  TiClrminfoParam,
  TiClrminfoResponse,
} from './types'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { Logger } from 'tslog'

export default class NeisRequest {
  private readonly rest: AxiosInstance
  private readonly baseURL = 'https://open.neis.go.kr/hub'

  private readonly logger?: Logger<unknown>

  private readonly params: DefaultParam

  private readonly timeout: number

  constructor(config: NeisRequestConfig) {
    this.rest = axios.create({
      baseURL: this.baseURL,
    })

    this.timeout = config.timeout ?? 5000

    this.logger = config.logger?.getSubLogger({ name: 'HTTP' })

    let pIndex = config.pIndex
    let pSize = config.pSize

    if (!config.key) {
      this.logger?.warn('No key provided, using a sample key.')

      if (config.pIndex !== 1) {
        this.logger?.warn(
          `Using a sample key, pIndex is fixed to 1 from ${config.pIndex}.`
        )

        pIndex = 1
      }

      if (config.pSize !== 5) {
        this.logger?.warn(
          `Using a sample key, pSize is fixed to 5 from ${config.pSize}.`
        )

        pSize = 5
      }
    }

    this.params = {
      key: config.key,
      type: config.type,
      pIndex,
      pSize,
    }
  }

  protected async schoolInfoRaw(params: SchoolInfoParam) {
    return this.get<SchoolInfoResponse>('schoolInfo', params)
  }

  protected async mealServiceDietInfoRaw(params: MealServiceDietInfoParam) {
    return this.get<MealServiceDietInfoResponse>('mealServiceDietInfo', params)
  }

  protected async SchoolScheduleRaw(params: SchoolScheduleParam) {
    return this.get<SchoolScheduleResponse>('SchoolSchedule', params)
  }

  protected async acaInsTiInfoRaw(params: AcaInsTiInfoParam) {
    return this.get<AcaInsTiInfoResponse>('acaInsTiInfo', params)
  }

  protected async elsTimetableRaw(params: ElsTimetableParam) {
    return this.get<ElsTimetableResponse>('elsTimetable', params)
  }

  protected async elsTimetablebgsRaw(params: ElsTimetableParam) {
    return this.get<ElsTimetableResponse>('elsTimetablebgs', params)
  }

  protected async misTimetableRaw(params: MisTimetableParam) {
    return this.get<MisTimetableResponse>('misTimetable', params)
  }

  protected async misTimetablebgsRaw(params: MisTimetableParam) {
    return this.get<MisTimetableResponse>('misTimetablebgs', params)
  }

  protected async hisTimetableRaw(params: HisTimetableParam) {
    return this.get<HisTimetableResponse>('hisTimetable', params)
  }

  protected async hisTimetablebgsRaw(params: HisTimetableParam) {
    return this.get<HisTimetableResponse>('hisTimetablebgs', params)
  }

  protected async spsTimetableRaw(params: SpsTimetableParam) {
    return this.get<SpsTimetableResponse>('spsTimetable', params)
  }

  protected async spsTimetablebgsRaw(params: SpsTimetableParam) {
    return this.get<SpsTimetableResponse>('spsTimetablebgs', params)
  }

  protected async classInfoRaw(params: ClassInfoParam) {
    return this.get<ClassInfoResponse>('classInfo', params)
  }

  protected async schoolMajorinfoRaw(params: SchoolMajorinfoParam) {
    return this.get<SchoolMajorinfoResponse>('schoolMajorinfo', params)
  }

  protected async schulAflcoinfoRaw(params: SchulAflcoinfoParam) {
    return this.get<SchulAflcoinfoResponse>('schulAflcoinfo', params)
  }

  protected async tiClrminfoRaw(params: TiClrminfoParam) {
    return this.get<TiClrminfoResponse>('tiClrminfo', params)
  }

  private async get<T extends Responses>(endpoint: string, params: Params) {
    return this.request<T>('GET', endpoint, this.timeout, params)
  }

  private async request<T extends Responses>(
    method: string,
    endpoint: string,
    timeout: number,
    params: Params
  ): Promise<T[]> {
    const config: AxiosRequestConfig = {
      method,
      url: endpoint,
      timeout,
      params: {
        ...this.params,
        ...params,
      },
    }

    this.logger?.debug(`${method} /${config.url}`, config.params)

    const { data } = await this.rest.request(config).catch(() => {
      const error = new RequestTimeoutError(timeout)

      this.logger?.error(error)

      throw error
    })

    if (data.RESULT) {
      const code = data.RESULT.CODE as ErrorCode
      const err = new ErrorsMapping[code](code, data.RESULT.MESSAGE)

      this.logger?.error(err)

      throw err
    }

    return Object.values((Object.values(data) as object[][])[0][1])[0]
  }
}
