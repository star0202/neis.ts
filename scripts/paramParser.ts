import fs from 'fs'

const str = fs.readFileSync('./params.txt', 'utf-8')

const items = str.split('\n').map((x) =>
  x
    .trim()
    .split(' ')
    .filter((x) => x)
    .join(' ')
    .replace(/\t/g, '')
)

console.log(items)

const typeRegex = /^(.*) (.*)\((필수|선택)\) (.*)$/

const result: string[] = []

const typeNameFromString = (name: string) => {
  switch (name) {
    case 'STRING':
      return 'string'
    default:
      throw new Error('not implemented')
  }
}

for (const data of items) {
  const matches = typeRegex.exec(data)

  if (!matches) {
    console.log('not matched:', data)
    continue
  }

  const [, name, typeName, required, description] = matches

  result.push(
    `/** ${description} */`,
    `readonly ${name}${required === '필수' ? '' : '?'}: ${typeNameFromString(
      typeName
    )}`
  )
}

console.log(result.join('\n'))
