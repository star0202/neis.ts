import type { ElsTimetableResponse } from '../src'
import { AE, ELS, YMD } from './constants'
import { neis } from './utils'

describe('ElsTimetable', () => {
  it('should return ElsTimetableResponse[]', async () => {
    const data = await neis.getElsTimetable({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: ELS,
      ALL_TI_YMD: YMD,
    })

    expect(data).toMatchObject<ElsTimetableResponse[]>(data)
  })

  it('should return ElsTimetableResponse', async () => {
    const data = await neis.getElsTimetableOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: ELS,
      ALL_TI_YMD: YMD,
      GRADE: '1',
      CLASS_NM: '1',
      PERIO: '1',
    })

    expect(data).toMatchObject<ElsTimetableResponse>(data)
  })
})
