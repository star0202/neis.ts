import { AE, SE } from './constants'
import { neis } from './utils'

const params = {
  ATPT_OFCDC_SC_CODE: AE,
  SD_SCHUL_CODE: SE,
}

describe('TiClrminfo', () => {
  it('should return TiClrminfoResponse[]', async () => {
    const data = await neis.getClrm(params)

    expect(data)
  })

  it('should return TiClrminfoResponse', async () => {
    const data = await neis.getClrmOne(params)

    expect(data)
  })
})
