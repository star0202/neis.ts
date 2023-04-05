# neis.ts

![License](https://img.shields.io/github/license/star0202/neis.ts?style=flat-square)

NEIS Open API를 쉽게 사용하기 위한 TypeScript API Wrapper입니다.

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
import { Logger } from 'tslog' // Optional

const logger = new Logger() // Optional
const neis = new Neis({
  // NeisConfig 참고
  KEY: 'API KEY',
  Type: 'json',
  pIndex: 1,
  pSize: 100,
  logger: logger, // Optional
})

;(async () => {
  const school = await neis.getSchoolOne({
    // SchoolRequestParams 참고
    ATPT_OFCDC_SC_CODE: '시도교육청코드',
    SD_SCHUL_CODE: '표준학교코드',
  })
  const meal = await school.getMealOne({
    // MealRequestParams 참고
    MLSV_YMD: 'yyyymmdd',
  })

  console.log(school)
  console.log(meal)
})()
```

## Official API Docs by NEIS

- [교육정보 공공데이터포털](https://open.neis.go.kr/portal/guide/apiIntroPage.do)
