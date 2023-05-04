# neis.ts

![License](https://img.shields.io/github/license/star0202/neis.ts?style=flat-square)

NEIS Open API를 쉽게 사용하기 위한 TypeScript API Wrapper입니다.
모든 엔드포인트가 래핑되어 있습니다.

## Installation

Install from [npm](https://www.npmjs.com/package/neis.ts)

```bash
npm install neis.ts
# or
yarn add neis.ts
# or
pnpm add neis.ts
```

## Optional Dependencies

- [tslog](https://www.npmjs.com/package/tslog) (로깅)

## Usage

```ts
import { Neis } from 'neis.ts'
import { Logger } from 'tslog'

const logger = new Logger()
const neis = new Neis({
  KEY: 'API KEY',
  Type: 'json',
  pIndex: 1,
  pSize: 100,
  logger: logger.getSubLogger({
    name: 'neis',
  }),
})

;(async () => {
  // 학교
  const school = await neis.getSchool({
    // or getSchoolOne
    ATPT_OFCDC_SC_CODE: '시도교육청코드',
    SD_SCHUL_CODE: '표준학교코드',
  })

  // 급식
  const meal = await neis.getMeal({
    ATPT_OFCDC_SC_CODE: '시도교육청코드',
    SD_SCHUL_CODE: '표준학교코드',
    MLSV_YMD: '날짜',
  })

  // 학사일정
  const schedule = await neis.getSchedule({
    ATPT_OFCDC_SC_CODE: '시도교육청코드',
    SD_SCHUL_CODE: '표준학교코드',
    AA_YMD: '날짜',
  })

  // 학원 / 교습소
  const academy = await neis.getAcademy({
    ATPT_OFCDC_SC_CODE: '시도교육청코드',
    ACA_ASNUM: '학원지정번호',
  })

  // and more

  console.log(school)
  console.log(meal)
  console.log(schedule)
  console.log(academy)
})()
```

## Official API Docs by NEIS

- [교육정보 공공데이터포털](https://open.neis.go.kr/portal/guide/apiIntroPage.do)
