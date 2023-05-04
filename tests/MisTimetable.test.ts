import type { MisTimetableResponse } from '../src'
import { AE, MIS, YMD } from './constants'
import { neis } from './utils'

describe('MisTimetable', () => {
  it('should return MisTimetableResponse[]', async () => {
    const data = await neis.getMisTimetable({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: MIS,
      ALL_TI_YMD: YMD,
    })

    expect(data).toMatchObject<MisTimetableResponse[]>(data)
  })

  it('should return MisTimetableResponse', async () => {
    const data = await neis.getMisTimetableOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: MIS,
      ALL_TI_YMD: YMD,
      GRADE: '1',
      CLASS_NM: '1',
      PERIO: '1',
    })

    expect(data).toMatchObject<MisTimetableResponse>(data)
  })
})
