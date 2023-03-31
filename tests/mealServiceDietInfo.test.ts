import { Neis } from '../src'
import { MealServiceDietInfo } from '../src/types'
import { Logger } from 'tslog'

describe('mealServiceDietInfo', () => {
  it('should return MealServiceDietInfo[]', async () => {
    const logger = new Logger()
    const neis = new Neis({
      logger: logger,
    })

    const data = await neis.mealServiceDietInfo('B10', '7091455', '20230331')
    logger.info(data)

    expect(data).toMatchObject<MealServiceDietInfo[]>(data)
  })
})
