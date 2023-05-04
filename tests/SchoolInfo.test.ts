import type { SchoolInfoResponse } from '../src'
import { AE, SE } from './constants'
import { neis } from './utils'

describe('School', () => {
  it('should return SchoolInfoResponse[]', async () => {
    const data = await neis.getSchool({
      ATPT_OFCDC_SC_CODE: AE,
    })

    expect(data).toMatchObject<SchoolInfoResponse[]>(data)
  })

  it('should return SchoolInfoResponse', async () => {
    const data = await neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<SchoolInfoResponse>(data)
  })
})
