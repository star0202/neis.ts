import { AE, SE } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
  SD_SCHUL_CODE: SE,
}

describe('SchoolSchedule', () => {
  it('should return SchoolScheduleResponse[]', async () => {
    const data = await neis.getSchedule(params)

    expect(data)
  })

  it('should return SchoolScheduleResponse', async () => {
    const data = await neis.getScheduleOne(params)

    expect(data)
  })
})
