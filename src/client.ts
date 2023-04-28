import { NeisRequest } from './http'
import type {
  MealServiceDietInfoParam,
  MealServiceDietInfoResponse,
  NeisConfig,
  SchoolInfoParam,
  SchoolInfoResponse,
  SchoolScheduleParam,
  SchoolScheduleResponse,
} from './types'

export class Neis extends NeisRequest {
  constructor(config?: NeisConfig) {
    super({ Type: 'json', pIndex: 1, pSize: 100, ...config })
  }

  async getSchool(params: SchoolInfoParam): Promise<SchoolInfoResponse[]> {
    return await this.schoolInfoRaw(params)
  }

  async getSchoolOne(params: SchoolInfoParam): Promise<SchoolInfoResponse> {
    return (await this.schoolInfoRaw(params))[0]
  }

  async getMeal(
    params: MealServiceDietInfoParam
  ): Promise<MealServiceDietInfoResponse[]> {
    return await this.mealServiceDietInfoRaw(params)
  }

  async getMealOne(
    params: MealServiceDietInfoParam
  ): Promise<MealServiceDietInfoResponse> {
    return (await this.mealServiceDietInfoRaw(params))[0]
  }

  async getSchedule(
    params: SchoolScheduleParam
  ): Promise<SchoolScheduleResponse[]> {
    return await this.SchoolScheduleRaw(params)
  }

  async getScheduleOne(
    params: SchoolScheduleParam
  ): Promise<SchoolScheduleResponse> {
    return (await this.SchoolScheduleRaw(params))[0]
  }
}
