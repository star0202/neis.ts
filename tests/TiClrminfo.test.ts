import type { TiClrminfoResponse } from '../src'
import { AE, SE } from './constants'
import { neis } from './utils'

describe('TiClrminfo', () => {
  it('should return TiClrminfoResponse[]', async () => {
    const data = await neis.getClrm({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<TiClrminfoResponse[]>(data)
  })

  it('should return TiClrminfoResponse', async () => {
    const data = await neis.getClrmOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
      AY: '2023',
      GRADE: '1',
      SEM: '1',
    })

    expect(data).toMatchObject<TiClrminfoResponse>(data)
  })
})
