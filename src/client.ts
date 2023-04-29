import { NeisRequest } from './http'
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
  SchoolInfoParam,
  SchoolInfoResponse,
  SchoolScheduleParam,
  SchoolScheduleResponse,
  SpsTimetableParam,
  SpsTimetableResponse,
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

  async getAcademy(params: AcaInsTiInfoParam): Promise<AcaInsTiInfoResponse[]> {
    return await this.acaInsTiInfoRaw(params)
  }

  async getAcademyOne(
    params: AcaInsTiInfoParam
  ): Promise<AcaInsTiInfoResponse> {
    return (await this.acaInsTiInfoRaw(params))[0]
  }

  async getElsTimetable(
    params: ElsTimetableParam
  ): Promise<ElsTimetableResponse[]> {
    return await this.elsTimetableRaw(params)
  }

  async getElsTimetableOne(
    params: ElsTimetableParam
  ): Promise<ElsTimetableResponse> {
    return (await this.elsTimetableRaw(params))[0]
  }

  async getMisTimetable(
    params: MisTimetableParam
  ): Promise<MisTimetableResponse[]> {
    return await this.misTimetableRaw(params)
  }

  async getMisTimetableOne(
    params: MisTimetableParam
  ): Promise<MisTimetableResponse> {
    return (await this.misTimetableRaw(params))[0]
  }

  async getHisTimetable(
    params: HisTimetableParam
  ): Promise<HisTimetableResponse[]> {
    return await this.hisTimetableRaw(params)
  }

  async getHisTimetableOne(
    params: HisTimetableParam
  ): Promise<HisTimetableResponse> {
    return (await this.hisTimetableRaw(params))[0]
  }

  async getSpsTimetable(
    params: SpsTimetableParam
  ): Promise<SpsTimetableResponse[]> {
    return await this.spsTimetableRaw(params)
  }

  async getSpsTimetableOne(
    params: SpsTimetableParam
  ): Promise<SpsTimetableResponse> {
    return (await this.spsTimetableRaw(params))[0]
  }
}
