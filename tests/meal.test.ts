import { MealInfo, Neis } from '../src'
import { Logger } from 'tslog'

const logger = new Logger()

const neis = new Neis({
  logger: logger,
})

describe('Meal', () => {
  it('should return MealInfo[]', async () => {
    const schools = await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
    })

    const data: MealInfo[] = []
    for await (const school of schools) {
      data.push(await school.getMealOne({ MLSV_YMD: '20230331' }))
    }

    logger.info(data)

    expect(data).toMatchObject<MealInfo[]>(data)
  })

  it('should return MealInfo', async () => {
    const school = await neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7091455',
    })

    const data = await school.getMealOne({ MLSV_YMD: '20230331' })
    logger.info(data)

    expect(data).toMatchObject<MealInfo>(data)
  })
})
