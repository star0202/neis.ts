import { AE } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
}

describe('SchoolInfo', () => {
  it('should return SchoolInfoResponse[]', async () => {
    const data = await neis.getSchool(params)

    data.forEach((school) => {
      expect(school)
    })
  })

  it('should return SchoolInfoResponse', async () => {
    const data = await neis.getSchoolOne(params)

    expect(data)
  })
})
