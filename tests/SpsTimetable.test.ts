import type { SpsTimetableResponse } from '../src'
import { AE, SPS, YMD } from './constants'
import { neis } from './utils'

describe('SpsTimetable', () => {
  it('should return SpsTimetableResponse[]', async () => {
    const data = await neis.getSpsTimetable({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SPS,
      ALL_TI_YMD: YMD,
    })

    expect(data).toMatchObject<SpsTimetableResponse[]>(data)
  })

  it('should return SpsTimetableResponse', async () => {
    const data = await neis.getSpsTimetableOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SPS,
      ALL_TI_YMD: YMD,
      GRADE: '1',
      CLASS_NM: '1',
      PERIO: '1',
    })

    expect(data).toMatchObject<SpsTimetableResponse>(data)
  })
})
