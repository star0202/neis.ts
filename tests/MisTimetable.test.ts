import { AE, MIS } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
  SD_SCHUL_CODE: MIS,
}

describe('MisTimetable', () => {
  it('should return MisTimetableResponse[]', async () => {
    const data = await neis.getMisTimetable(params)

    expect(data)
  })

  it('should return MisTimetableResponse', async () => {
    const data = await neis.getMisTimetableOne(params)

    expect(data)
  })
})
