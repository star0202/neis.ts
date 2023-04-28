import fs from 'fs'

const str = fs.readFileSync('./responses.txt', 'utf-8')

const items = str.split('\n').map((x) =>
  x
    .trim()
    .split(' ')
    .filter((x) => x)
    .join(' ')
    .replace(/\t/g, '')
)

console.log(items)

const regex = /^(\d*) (.*) (.*)$/

const result: string[] = []

for (const data of items) {
  const matches = regex.exec(data)

  if (!matches) {
    console.log('not matched:', data)
    continue
  }

  const [, name, description] = matches.slice(1)

  result.push(`/** ${description} */`, `readonly ${name}: string`)
}

console.log(result.join('\n'))
