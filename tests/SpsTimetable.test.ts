import { AE, SPS } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
  SD_SCHUL_CODE: SPS,
}

describe('SpsTimetable', () => {
  it('should return SpsTimetableResponse[]', async () => {
    const data = await neis.getSpsTimetable(params)

    expect(data)
  })

  it('should return SpsTimetableResponse', async () => {
    const data = await neis.getSpsTimetableOne(params)

    expect(data)
  })
})
