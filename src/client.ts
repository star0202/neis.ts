import { NeisRequest } from './http'
import { School } from './structures/school'
import { NeisConfig, SchoolRequestParam } from './types'

export class Neis extends NeisRequest {
  constructor(config: NeisConfig) {
    super({ Type: 'json', pIndex: 1, pSize: 100, ...config })
  }

  async getSchool(params: SchoolRequestParam): Promise<School[]> {
    return await this.schoolInfoRaw(params).then((data) =>
      data.map((item) => new School(this, item))
    )
  }

  async getSchoolOne(params: SchoolRequestParam): Promise<School> {
    return await this.schoolInfoRaw(params).then(
      (data) => new School(this, data[0])
    )
  }
}
