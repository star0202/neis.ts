import type { ClassInfoResponse } from '../src'
import { AE, SE } from './constants'
import { neis } from './utils'

describe('ClassInfo', () => {
  it('should return ClassInfoResponse[]', async () => {
    const data = await neis.getClass({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
    })

    expect(data).toMatchObject<ClassInfoResponse[]>(data)
  })

  it('should return ClassInfoResponse', async () => {
    const data = await neis.getClassOne({
      ATPT_OFCDC_SC_CODE: AE,
      SD_SCHUL_CODE: SE,
      GRADE: '1',
    })

    expect(data).toMatchObject<ClassInfoResponse>(data)
  })
})
