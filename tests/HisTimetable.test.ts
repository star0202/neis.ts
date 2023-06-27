import { AE, HIS } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
  SD_SCHUL_CODE: HIS,
}

describe('HisTimetable', () => {
  it('should return HisTimetableResponse[]', async () => {
    const data = await neis.getHisTimetable(params)

    expect(data)
  })

  it('should return HisTimetableResponse', async () => {
    const data = await neis.getHisTimetableOne(params)

    expect(data)
  })
})
