import { AE } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
}

describe('SchoolMajorinfo', () => {
  it('should return SchoolMajorinfoResponse[]', async () => {
    const data = await neis.getMajor(params)

    expect(data)
  })

  it('should return SchoolMajorinfoResponse', async () => {
    const data = await neis.getMajorOne(params)

    expect(data)
  })
})
