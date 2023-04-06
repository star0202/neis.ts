import { logger, neis } from '.'
import type { Meal } from '../src'

describe('Meal', () => {
  it('should return Meal[]', async () => {
    const schools = await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
    })

    const data: Meal[] = []
    for await (const school of schools) {
      data.push(await school.getMealOne({ MLSV_YMD: '20230331' }))
    }

    logger.info(data)

    expect(data).toMatchObject<Meal[]>(data)
  })

  it('should return Meal', async () => {
    const school = await neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7091455',
    })

    const data = await school.getMealOne({ MLSV_YMD: '20230331' })

    logger.info(data)

    expect(data).toMatchObject<Meal>(data)
  })
})
