import { AE } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
}

describe('SchulAflcoinfo', () => {
  it('should return SchulAflcoinfoResponse[]', async () => {
    const data = await neis.getAflco(params)

    expect(data)
  })

  it('should return SchulAflcoinfoResponse', async () => {
    const data = await neis.getAflcoOne(params)

    expect(data)
  })
})
