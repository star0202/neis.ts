import { NeisRequest } from './http'
import type {
  AcaInsTiInfoParam,
  ClassInfoParam,
  ElsTimetableParam,
  HisTimetableParam,
  MealServiceDietInfoParam,
  MisTimetableParam,
  NeisConfig,
  SchoolInfoParam,
  SchoolMajorinfoParam,
  SchoolScheduleParam,
  SchulAflcoinfoParam,
  SpsTimetableParam,
  TiClrminfoParam,
} from './types'

export class Neis extends NeisRequest {
  constructor(config?: NeisConfig) {
    super({ type: 'json', pIndex: 1, pSize: 100, ...config })
  }

  /** schoolInfo */
  async getSchool(params: SchoolInfoParam) {
    return this.schoolInfoRaw(params)
  }

  /** schoolInfo */
  async getSchoolOne(params: SchoolInfoParam) {
    return firstOf(this.schoolInfoRaw(params))
  }

  /** mealServiceDietInfo */
  async getMeal(params: MealServiceDietInfoParam) {
    return this.mealServiceDietInfoRaw(params)
  }

  /** mealServiceDietInfo */
  async getMealOne(params: MealServiceDietInfoParam) {
    return firstOf(this.mealServiceDietInfoRaw(params))
  }

  /** SchoolSchedule */
  async getSchedule(params: SchoolScheduleParam) {
    return this.SchoolScheduleRaw(params)
  }

  /** SchoolSchedule */
  async getScheduleOne(params: SchoolScheduleParam) {
    return firstOf(this.SchoolScheduleRaw(params))
  }

  /** acaInsTiInfo */
  async getAcademy(params: AcaInsTiInfoParam) {
    return this.acaInsTiInfoRaw(params)
  }

  /** acaInsTiInfo */
  async getAcademyOne(params: AcaInsTiInfoParam) {
    return firstOf(this.acaInsTiInfoRaw(params))
  }

  /** elsTimetable */
  async getElsTimetable(params: ElsTimetableParam) {
    return this.elsTimetableRaw(params)
  }

  /** elsTimetable */
  async getElsTimetableOne(params: ElsTimetableParam) {
    return firstOf(this.elsTimetableRaw(params))
  }

  /** misTimetable */
  async getMisTimetable(params: MisTimetableParam) {
    return this.misTimetableRaw(params)
  }

  /** misTimetable */
  async getMisTimetableOne(params: MisTimetableParam) {
    return firstOf(this.misTimetableRaw(params))
  }

  /** hisTimetable */
  async getHisTimetable(params: HisTimetableParam) {
    return this.hisTimetableRaw(params)
  }

  /** hisTimetable */
  async getHisTimetableOne(params: HisTimetableParam) {
    return firstOf(this.hisTimetableRaw(params))
  }

  /** spsTimetable */
  async getSpsTimetable(params: SpsTimetableParam) {
    return this.spsTimetableRaw(params)
  }

  /** spsTimetable */
  async getSpsTimetableOne(params: SpsTimetableParam) {
    return firstOf(this.spsTimetableRaw(params))
  }

  /** classInfo */
  async getClass(params: ClassInfoParam) {
    return this.classInfoRaw(params)
  }

  /** classInfo */
  async getClassOne(params: ClassInfoParam) {
    return firstOf(this.classInfoRaw(params))
  }

  /** schoolMajorinfo */
  async getMajor(params: SchoolMajorinfoParam) {
    return this.schoolMajorinfoRaw(params)
  }

  /** schoolMajorinfo */
  async getMajorOne(params: SchoolMajorinfoParam) {
    return firstOf(this.schoolMajorinfoRaw(params))
  }

  /** schulAflcoinfo */
  async getAflco(params: SchulAflcoinfoParam) {
    return this.schulAflcoinfoRaw(params)
  }

  /** schulAflcoinfo */
  async getAflcoOne(params: SchulAflcoinfoParam) {
    return firstOf(this.schulAflcoinfoRaw(params))
  }

  /** tiClrminfo */
  async getClrm(params: TiClrminfoParam) {
    return this.tiClrminfoRaw(params)
  }

  /** tiClrminfo */
  async getClrmOne(params: TiClrminfoParam) {
    return firstOf(this.tiClrminfoRaw(params))
  }
}

const firstOf = <T>(promise: Promise<T[]>) => promise.then((res) => res[0])
