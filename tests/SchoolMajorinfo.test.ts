import type { SchoolMajorinfoResponse } from '../src'
import { AE, SE } from './constants'
import { neis } from './utils'

describe('SchoolMajorinfo', () => {
  it('should return SchoolMajorinfoResponse[]', async () => {
    const data = await neis.getMajor({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<SchoolMajorinfoResponse[]>(data)
  })

  it('should return SchoolMajorinfoResponse', async () => {
    const data = await neis.getMajorOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<SchoolMajorinfoResponse>(data)
  })
})
