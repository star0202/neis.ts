import { Neis, School } from '../src'
import { Logger } from 'tslog'

const logger = new Logger()

const neis = new Neis({
  logger: logger,
})

describe('School', () => {
  it('should return School[]', async () => {
    const data = await neis.getSchool({
      ATPT_OFCDC_SC_CODE: 'B10',
    })
    logger.info(data)

    expect(data).toMatchObject<School[]>(data)
  })

  it('should return School', async () => {
    const data = await neis
      .getSchool({
        ATPT_OFCDC_SC_CODE: 'B10',
        SD_SCHUL_CODE: '7091455',
      })
      .then((data) => data[0])
    logger.info(data)

    expect(data).toMatchObject<School>(data)
  })
})
