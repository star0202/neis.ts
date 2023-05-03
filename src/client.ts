import { NeisRequest } from './http'
import type {
  AcaInsTiInfoParam,
  ElsTimetableParam,
  HisTimetableParam,
  MealServiceDietInfoParam,
  MisTimetableParam,
  NeisConfig,
  SchoolInfoParam,
  SchoolScheduleParam,
  SpsTimetableParam,
} from './types'

export class Neis extends NeisRequest {
  constructor(config?: NeisConfig) {
    super({ type: 'json', pIndex: 1, pSize: 100, ...config })
  }

  async getSchool(params: SchoolInfoParam) {
    return this.schoolInfoRaw(params)
  }

  async getSchoolOne(params: SchoolInfoParam) {
    return firstOf(this.schoolInfoRaw(params))
  }

  async getMeal(params: MealServiceDietInfoParam) {
    return this.mealServiceDietInfoRaw(params)
  }

  async getMealOne(params: MealServiceDietInfoParam) {
    return firstOf(this.mealServiceDietInfoRaw(params))
  }

  async getSchedule(params: SchoolScheduleParam) {
    return this.SchoolScheduleRaw(params)
  }

  async getScheduleOne(params: SchoolScheduleParam) {
    return firstOf(this.SchoolScheduleRaw(params))
  }

  async getAcademy(params: AcaInsTiInfoParam) {
    return this.acaInsTiInfoRaw(params)
  }

  async getAcademyOne(params: AcaInsTiInfoParam) {
    return firstOf(this.acaInsTiInfoRaw(params))
  }

  async getElsTimetable(params: ElsTimetableParam) {
    return this.elsTimetableRaw(params)
  }

  async getElsTimetableOne(params: ElsTimetableParam) {
    return firstOf(this.elsTimetableRaw(params))
  }

  async getMisTimetable(params: MisTimetableParam) {
    return this.misTimetableRaw(params)
  }

  async getMisTimetableOne(params: MisTimetableParam) {
    return firstOf(this.misTimetableRaw(params))
  }

  async getHisTimetable(params: HisTimetableParam) {
    return this.hisTimetableRaw(params)
  }

  async getHisTimetableOne(params: HisTimetableParam) {
    return firstOf(this.hisTimetableRaw(params))
  }

  async getSpsTimetable(params: SpsTimetableParam) {
    return this.spsTimetableRaw(params)
  }

  async getSpsTimetableOne(params: SpsTimetableParam) {
    return firstOf(this.spsTimetableRaw(params))
  }
}

const firstOf = <T>(promise: Promise<>) => promise.then((res) => res[0])
