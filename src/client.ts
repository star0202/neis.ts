import { NeisRequest } from './http'
import { School } from './structures/school'
import { NeisConfig, SchoolRequestConfig } from './types'

export class Neis extends NeisRequest {
  constructor(config: NeisConfig) {
    super({ Type: 'json', pIndex: 1, pSize: 10, ...config })
  }

  async getSchool(config: SchoolRequestConfig): Promise<School | School[]> {
    const data = await this.schoolInfoRaw(config)

    const schools: School[] = []
    for await (const item of data) {
      schools.push(new School(this, item))
    }

    if (schools.length === 1) return schools[0]

    return schools
  }
}
