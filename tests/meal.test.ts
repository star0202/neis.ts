import type { MealResponse } from '../src'
import { AE, SE, YMD } from './constants'
import { neis } from './utils'

describe('Meal', () => {
  it('should return MealResponse[]', async () => {
    const data = await neis.getMeal({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<MealResponse[]>(data)
  })

  it('should return MealResponse', async () => {
    const data = await neis.getMealOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
      MLSV_YMD: YMD,
    })

    expect(data).toMatchObject<MealResponse>(data)
  })
})
