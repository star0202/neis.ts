import { MealInfo, Neis, School } from '../src'
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
      data.push(
        await school.getMeal({ MLSV_YMD: '20230331' }).then((data) => data[0])
      )
    }

    logger.info(data)

    expect(data).toMatchObject<MealInfo[]>(data)
  })

  it('should return MealInfo', async () => {
    const school = await neis
      .getSchool({
        ATPT_OFCDC_SC_CODE: 'B10',
        SD_SCHUL_CODE: '7091455',
      })
      .then((data) => data[0])

    const data = await school
      .getMeal({ MLSV_YMD: '20230331' })
      .then((data) => data[0])
    logger.info(data)

    expect(data).toMatchObject<MealInfo>(data)
  })
})
