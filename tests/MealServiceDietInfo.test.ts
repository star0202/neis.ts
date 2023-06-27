import { AE, SE } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
  SD_SCHUL_CODE: SE,
}

describe('MealServiceDietInfo', () => {
  it('should return MealServiceDietInfoResponse[]', async () => {
    const data = await neis.getMeal(params)

    expect(data)
  })

  it('should return MealServiceDietInfoResponse', async () => {
    const data = await neis.getMealOne(params)

    expect(data)
  })
})
