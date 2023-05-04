import type { SchoolScheduleResponse } from '../src'
import { AE, SE, YMD } from './constants'
import { neis } from './utils'

describe('SchoolSchedule', () => {
  it('should return SchoolScheduleResponse[]', async () => {
    const data = await neis.getSchedule({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<SchoolScheduleResponse[]>(data)
  })

  it('should return SchoolScheduleResponse', async () => {
    const data = await neis.getScheduleOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
      AA_YMD: YMD,
    })

    expect(data).toMatchObject<SchoolScheduleResponse>(data)
  })
})
