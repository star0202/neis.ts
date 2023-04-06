import type { MealInfo } from '../types'

export class Meal implements MealInfo {
  ATPT_OFCDC_SC_CODE: string
  ATPT_OFCDC_SC_NM: string
  SD_SCHUL_CODE: string
  SCHUL_NM: string

  MMEAL_SC_CODE: string
  MMEAL_SC_NM: string
  MLSV_YMD: string
  MLSV_FGR: string
  DDISH_NM: string
  ORPLC_INFO: string
  CAL_INFO: string
  NTR_INFO: string
  MLSV_FROM_YMD: string
  MLSV_TO_YMD: string

  constructor(meal: MealInfo) {
    this.ATPT_OFCDC_SC_CODE = meal.ATPT_OFCDC_SC_CODE
    this.ATPT_OFCDC_SC_NM = meal.ATPT_OFCDC_SC_NM
    this.SD_SCHUL_CODE = meal.SD_SCHUL_CODE
    this.SCHUL_NM = meal.SCHUL_NM

    this.MMEAL_SC_CODE = meal.MMEAL_SC_CODE
    this.MMEAL_SC_NM = meal.MMEAL_SC_NM
    this.MLSV_YMD = meal.MLSV_YMD
    this.MLSV_FGR = meal.MLSV_FGR
    this.DDISH_NM = meal.DDISH_NM
    this.ORPLC_INFO = meal.ORPLC_INFO
    this.CAL_INFO = meal.CAL_INFO
    this.NTR_INFO = meal.NTR_INFO
    this.MLSV_FROM_YMD = meal.MLSV_FROM_YMD
    this.MLSV_TO_YMD = meal.MLSV_TO_YMD
  }

  getDish(): string[] {
    return this.DDISH_NM.split('<br/>').map((dish) =>
      dish.replace(/ {2,}(?!(\((\d{1,2}\.)+\)))/g, '')
    )
  }

  getDishName(): string[] {
    return this.DDISH_NM.replace(/ {2,}.*/g, '').split('<br/>')
  }

  getOrigin(): { name: string; origin: string }[] {
    return this.ORPLC_INFO.split('<br/>').map((origin) => {
      const [name, originName] = origin.split(' : ')
      return { name, origin: originName }
    })
  }

  getCal(): number {
    return parseFloat(this.CAL_INFO.replace(/[^0-9.]/g, ''))
  }

  getNutrition(): { name: string; amount: number }[] {
    return this.NTR_INFO.split('<br/>').map((nutrition) => {
      const [name, amount] = nutrition.split(' : ')
      return { name, amount: parseFloat(amount) }
    })
  }
}
