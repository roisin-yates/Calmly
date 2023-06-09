import express from 'express'
import path from 'path'

import routes from './routes/diary'
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api', routes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

export default server
