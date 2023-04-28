import type { ScheduleResponse } from '../src'
import { AE, SE, YMD } from './constants'
import { neis } from './utils'

describe('Schedule', () => {
  it('should return ScheduleResponse[]', async () => {
    const data = await neis.getSchedule({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<ScheduleResponse[]>(data)
  })

  it('should return ScheduleResponse', async () => {
    const data = await neis.getScheduleOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
      AA_YMD: YMD,
    })

    expect(data).toMatchObject<ScheduleResponse>(data)
  })
})
