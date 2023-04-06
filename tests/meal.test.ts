import { neis } from '.'
import type { Meal } from '../src'

describe('Meal', () => {
  it('should return Meal[]', async () => {
    const schools = await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
    })

    const data: Meal[] = []
    for await (const school of schools) {
      data.push(await school.getMealOne({ MLSV_YMD: '20230331' }))
    }

    expect(data).toMatchObject<Meal[]>(data)
  })

  it('should return Meal', async () => {
    const school = await neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7091455',
    })

    const data = await school.getMealOne({ MLSV_YMD: '20230331' })

    expect(data).toMatchObject<Meal>(data)
  })

  it('should return meal infos', async () => {
    const school = await neis.getSchoolOne({
      ATPT_OFCDC_SC_CODE: 'B10',
      SD_SCHUL_CODE: '7091455',
    })

    const meal = await school.getMealOne({ MLSV_YMD: '20230331' })

    const data = {
      cal: meal.getCal(),
      dish: meal.getDish(),
      dishName: meal.getDishName(),
      nutrition: meal.getNutrition(),
      origin: meal.getOrigin(),
    }

    expect(data.cal).toBe(901.4)
    expect(data.dish).toMatchObject<string[]>(data.dish)
    expect(data.dishName).toMatchObject<string[]>(data.dishName)
    expect(data.nutrition).toMatchObject<{ name: string; amount: number }[]>(
      data.nutrition
    )
    expect(data.origin).toMatchObject<{ name: string; origin: string }[]>(
      data.origin
    )
  })
})
