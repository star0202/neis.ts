import { MealInfo, Neis, School } from '../src'
import { Logger } from 'tslog'

const logger = new Logger()

const neis = new Neis({
  logger: logger,
})

describe('Meal', () => {
  it('should return MealInfo[]', async () => {
    const schools = (await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
    })) as School[]

    const data: MealInfo[] = []
    for await (const school of schools) {
      data.push((await school.getMeal({ MLSV_YMD: '20230331' })) as MealInfo)
    }

    logger.info(data)

    expect(data).toMatchObject<MealInfo[]>(data)
  })

  it('should return MealInfo', async () => {
    const school = (await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7091455',
    })) as School

    const data = (await school.getMeal({ MLSV_YMD: '20230331' })) as MealInfo
    logger.info(data)

    expect(data).toMatchObject<MealInfo>(data)
  })
})
