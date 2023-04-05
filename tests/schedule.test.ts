import { logger, neis } from '.'
import type { ScheduleInfo } from '../src/types'

describe('Schedule', () => {
  it('should return ScheduleInfo[]', async () => {
    const schools = await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
    })

    const data: ScheduleInfo[] = []
    for await (const school of schools) {
      data.push(await school.getScheduleOne({ AY_YMD: '20230301' }))
    }

    logger.info(data)

    expect(data).toMatchObject<ScheduleInfo[]>(data)
  })

  it('should return ScheduleInfo', async () => {
    const school = await neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7091455',
    })

    const data = await school.getScheduleOne({ AY_YMD: '20230301' })

    logger.info(data)

    expect(data).toMatchObject<ScheduleInfo>(data)
  })
})
