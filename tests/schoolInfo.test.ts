import { Neis } from '../src'
import { EleMidSchool, HighSchool, School } from '../src/structures/school'
import { EleMidSchoolInfo, HighSchoolInfo } from '../src/types'
import { Logger } from 'tslog'

const logger = new Logger()
const neis = new Neis({
  logger: logger,
})

describe('schoolInfo', () => {
  it('should return SchoolInfo[]', async () => {
    const data = (await neis.getSchool('B10')) as School[]
    logger.info(data)

    expect(data).toMatchObject<School[]>(data)
  })

  it('should return SchoolInfo', async () => {
    const data = (await neis.getSchool('B10', '7091455')) as School
    logger.info(data)

    expect(data).toMatchObject<School>(data)
  })
})
