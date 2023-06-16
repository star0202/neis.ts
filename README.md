# neis.ts

![License](https://img.shields.io/github/license/star0202/neis.ts?style=flat-square)

NEIS Open API를 쉽게 사용하기 위한 TypeScript API Wrapper입니다.

모든 엔드포인트가 래핑되어 있습니다.

## 설치

```bash
npm install neis.ts  # npm
yarn add neis.ts  # yarn
pnpm add neis.ts  # pnpm
```

## 선택적 종속성

- [tslog](https://www.npmjs.com/package/tslog) (로깅)

## 사용법

```ts
import Neis from 'neis.ts'
import { Logger } from 'tslog'

const logger = new Logger()
const neis = new Neis({
  key: 'API KEY',
  type: 'json',
  pIndex: 1,
  pSize: 100,
  logger: new Logger(),
})


neis
  .getSchool({
    ATPT_OFCDC_SC_CODE: '시도교육청코드',
    SD_SCHUL_CODE: '표준학교코드',
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })
```

### NEIS 공식 API 문서

- [교육정보 공공데이터포털](https://open.neis.go.kr/portal/guide/apiIntroPage.do)
