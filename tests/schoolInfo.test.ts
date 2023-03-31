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

  it('should return EleMidSchool[]', async () => {
    const data = (await neis.getEleMidSchool('B10')) as EleMidSchool[]
    logger.info(data)

    expect(data).toMatchObject<EleMidSchoolInfo[]>(data)
  })

  it('should return HighSchool[]', async () => {
    const data = (await neis.getHighSchool('B10')) as HighSchool[]
    logger.info(data)

    expect(data).toMatchObject<HighSchoolInfo[]>(data)
  })

  it('should return SchoolInfo', async () => {
    const data = (await neis.getSchool('B10', '7091455')) as School
    logger.info(data)

    expect(data).toMatchObject<School>(data)
  })
})
