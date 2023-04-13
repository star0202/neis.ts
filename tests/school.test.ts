import { neis } from '.'
import type { School } from '../src'

describe('School', () => {
  it('should return School[]', async () => {
    const data = await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
    })

    expect(data).toMatchObject<School[]>(data)
  })

  it('should return School', async () => {
    const data = await neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7091455',
    })

    expect(data).toMatchObject<School>(data)
  })
})
