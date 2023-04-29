import type { ElsTimetableResponse, MisTimetableResponse } from '../src'
import { AE, ELS, MIS, YMD } from './constants'
import { neis } from './utils'

describe('Timetable', () => {
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
