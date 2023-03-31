import { NeisRequest } from './http'
import { School } from './structures/school'
import { Logger } from 'tslog'

export class Neis extends NeisRequest {
  constructor(config: {
    KEY?: string
    Type?: 'json' | 'xml'
    pIndex?: number
    pSize?: number
    logger?: Logger<unknown>
  }) {
    super({ Type: 'json', pIndex: 1, pSize: 10, ...config })
  }

  async getSchool(
    ATPT_OFCDC_SC_CODE?: string,
    SD_SCHUL_CODE?: string
  ): Promise<School | School[]> {
    const data = await this.schoolInfoRaw(ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE)

    const schools: School[] = []
    for await (const item of data) {
      schools.push(new School(this, item))
    }

    if (schools.length === 1) return schools[0]

    return schools
  }
}
