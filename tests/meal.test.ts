import { neis } from '.'
import type { MealInfo } from '../src/types'

describe('Meal', () => {
  it('should return MealInfo[]', async () => {
    const schools = await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
    })

    const data: MealInfo[] = []
    for await (const school of schools) {
      data.push(await school.getMealOne({ MLSV_YMD: '20230331' }))
    }

    expect(data).toMatchObject<MealInfo[]>(data)
  })

  it('should return MealInfo', async () => {
    const school = await neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7091455',
    })

    const data = await school.getMealOne({ MLSV_YMD: '20230331' })

    expect(data).toMatchObject<MealInfo>(data)
  })
})
