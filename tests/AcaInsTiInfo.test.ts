import { AE } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
}

describe('AcaInsTiInfo', () => {
  it('should return AcaInsTiInfoResponse[]', async () => {
    const data = await neis.getAcademy(params)

    expect(data)
  })

  it('should return AcaInsTiInfoResponse', async () => {
    const data = await neis.getAcademyOne(params)

    expect(data)
  })
})
