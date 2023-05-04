import type { AcaInsTiInfoResponse } from '../src'
import { AE, AN } from './constants'
import { neis } from './utils'

describe('AcaInsTiInfo', () => {
  it('should return AcaInsTiInfoResponse[]', async () => {
    const data = await neis.getAcademy({
      ATPT_OFCDC_SC_CODE: AE,
    })

    expect(data).toMatchObject<AcaInsTiInfoResponse[]>(data)
  })

  it('should return AcaInsTiInfoResponse', async () => {
    const data = await neis.getAcademyOne({
      ATPT_OFCDC_SC_CODE: AE,
      ACA_ASNUM: AN,
    })

    expect(data).toMatchObject<AcaInsTiInfoResponse>(data)
  })
})
