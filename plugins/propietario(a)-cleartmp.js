import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 

conn.reply(m.chat, `${eg}𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙲𝙰𝚁𝙿𝙴𝚃𝙰 𝚃𝙼𝙿 𝙵𝚄𝙴𝚁𝙾𝙽 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾𝚂. ❌`, m)

const tmp = [tmpdir(), join(__dirname, '../tmp')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file)
})} //NO USAR ESTE COMANDO EN HEROKU | DO NOT USE THIS COMMAND ON HEROKU
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|cleartemp|borrartmp|eliminartmp|borrartemp|borrartemp)$/i
handler.exp = 500
handler.rowner = true
export default handler
