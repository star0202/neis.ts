import { NeisRequest } from './http'
import { School } from './structures/school'
import { NeisConfig, SchoolRequestConfig } from './types'

export class Neis extends NeisRequest {
  constructor(config: NeisConfig) {
    super({ Type: 'json', pIndex: 1, pSize: 100, ...config })
  }

  async getSchool(config: SchoolRequestConfig): Promise<School[]> {
    return await this.schoolInfoRaw(config).then((data) =>
      data.map((item) => new School(this, item))
    )
  }

  async getSchoolOne(config: SchoolRequestConfig): Promise<School> {
    return await this.schoolInfoRaw(config).then(
      (data) => new School(this, data[0])
    )
  }
}
