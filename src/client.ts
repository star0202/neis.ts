import { NeisRequest } from './http'
import type {
  MealRequestParam,
  MealResponse,
  NeisConfig,
  ScheduleRequestParam,
  ScheduleResponse,
  SchoolRequestParam,
  SchoolResponse,
} from './types'

export class Neis extends NeisRequest {
  constructor(config?: NeisConfig) {
    super({ Type: 'json', pIndex: 1, pSize: 100, ...config })
  }

  async getSchool(params: SchoolRequestParam): Promise<SchoolResponse[]> {
    return await this.schoolInfoRaw(params)
  }

  async getSchoolOne(params: SchoolRequestParam): Promise<SchoolResponse> {
    return (await this.schoolInfoRaw(params))[0]
  }

  async getMeal(params: MealRequestParam): Promise<MealResponse[]> {
    return await this.mealServiceDietInfoRaw(params)
  }

  async getMealOne(params: MealRequestParam): Promise<MealResponse> {
    return (await this.mealServiceDietInfoRaw(params))[0]
  }

  async getSchedule(params: ScheduleRequestParam): Promise<ScheduleResponse[]> {
    return await this.SchoolScheduleRaw(params)
  }

  async getScheduleOne(
    params: ScheduleRequestParam
  ): Promise<ScheduleResponse> {
    return (await this.SchoolScheduleRaw(params))[0]
  }
}
