import { AE, SE } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
  SD_SCHUL_CODE: SE,
}

describe('ClassInfo', () => {
  it('should return ClassInfoResponse[]', async () => {
    const data = await neis.getClass(params)

    expect(data)
  })

  it('should return ClassInfoResponse', async () => {
    const data = await neis.getClassOne(params)

    expect(data)
  })
})
