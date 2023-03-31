import { Neis } from '../src'
import { SchoolInfo } from '../src/types'
import { Logger } from 'tslog'

describe('schoolInfo', () => {
  it('should return SchoolInfo[]', async () => {
    const logger = new Logger()
    const neis = new Neis({
      logger: logger,
    })

    const data = await neis.schoolInfo('B10', '7091455')
    logger.info(data)

    expect(data).toMatchObject<SchoolInfo[]>(data)
  })
})
