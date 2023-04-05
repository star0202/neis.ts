import { Neis } from '../src'
import { Logger } from 'tslog'

export const logger = new Logger()

export const neis = new Neis({
  logger: logger,
})
