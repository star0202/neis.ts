import type { SchulAflcoinfoResponse } from '../src'
import { AE, SE } from './constants'
import { neis } from './utils'

describe('SchulAflcoinfo', () => {
  it('should return SchulAflcoinfoResponse[]', async () => {
    const data = await neis.getAflco({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<SchulAflcoinfoResponse[]>(data)
  })

  it('should return SchulAflcoinfoResponse', async () => {
    const data = await neis.getAflcoOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<SchulAflcoinfoResponse>(data)
  })
})
