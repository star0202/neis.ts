import type { HisTimetableResponse } from '../src'
import { AE, HIS, YMD } from './constants'
import { neis } from './utils'

describe('HisTimetable', () => {
  it('should return HisTimetableResponse[]', async () => {
    const data = await neis.getHisTimetable({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: HIS,
      ALL_TI_YMD: YMD,
    })

    expect(data).toMatchObject<HisTimetableResponse[]>(data)
  })

  it('should return HisTimetableResponse', async () => {
    const data = await neis.getHisTimetableOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: HIS,
      ALL_TI_YMD: YMD,
      GRADE: '1',
      CLASS_NM: '1',
    })

    expect(data).toMatchObject<HisTimetableResponse>(data)
  })
})
