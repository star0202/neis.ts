import type { MealServiceDietInfoResponse } from '../src'
import { AE, SE, YMD } from './constants'
import { neis } from './utils'

describe('Meal', () => {
  it('should return MealServiceDietInfoResponse[]', async () => {
    const data = await neis.getMeal({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<MealServiceDietInfoResponse[]>(data)
  })

  it('should return MealServiceDietInfoResponse', async () => {
    const data = await neis.getMealOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
      MLSV_YMD: YMD,
    })

    expect(data).toMatchObject<MealServiceDietInfoResponse>(data)
  })
})
