import { Neis } from '../src'
import { School } from '../src/structures/school'
import { MealServiceDietInfo } from '../src/types'
import { Logger } from 'tslog'

describe('mealServiceDietInfo', () => {
  it('should return MealServiceDietInfo[]', async () => {
    const logger = new Logger()
    const neis = new Neis({
      logger: logger,
    })

    const school = (await neis.getSchool('B10', '7091455')) as School
    const data = (await school.getMeal('20230331')) as MealServiceDietInfo
    logger.info(data)

    expect(data).toMatchObject<MealServiceDietInfo>(data)
  })
})
