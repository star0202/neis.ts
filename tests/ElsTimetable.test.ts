import { AE, ELS } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
  SD_SCHUL_CODE: ELS,
}

describe('ElsTimetable', () => {
  it('should return ElsTimetableResponse[]', async () => {
    const data = await neis.getElsTimetable(params)

    expect(data)
  })

  it('should return ElsTimetableResponse', async () => {
    const data = await neis.getElsTimetableOne(params)

    expect(data)
  })
})
