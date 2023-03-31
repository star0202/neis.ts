import { Neis } from '../src'
import { School } from '../src/structures/school'
import { Logger } from 'tslog'

const logger = new Logger()

const neis = new Neis({
  logger: logger,
})

describe('School', () => {
  it('should return School[]', async () => {
    const data = (await neis.getSchool('B10')) as School[]
    logger.info(data)

    expect(data).toMatchObject<School[]>(data)
  })

  it('should return School', async () => {
    const data = (await neis.getSchool('B10', '7091455')) as School
    logger.info(data)

    expect(data).toMatchObject<School>(data)
  })
})
