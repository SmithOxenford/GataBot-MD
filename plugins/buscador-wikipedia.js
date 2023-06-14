import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙻𝙰 𝙿𝙰𝙻𝙰𝙱𝚁𝙰 𝙲𝙻𝙰𝚅𝙴 𝙿𝙰𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁 🔍\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾 :\n${usedPrefix + command} 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈`
wikipedia(`${text}`).then(res => {
let info = `🤖 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙴́ 𝙴𝚂𝚃𝙾 :\n\n` + res.result.isi
conn.SendButton(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)   
  
}).catch(() => { m.reply(`${fg}𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾́ 𝙻𝙾 𝚀𝚄𝙴 𝙱𝚄𝚂𝙲𝙰 𝙿𝙸𝙿𝙸𝙿𝙸 ☹️, 𝙿𝚁𝙾𝙲𝚄𝚁𝙰 𝚄𝚂𝙰𝚁 𝚄𝙽𝙰 𝙿𝙰𝙻𝙰𝙱𝚁𝙰 𝙲𝙻𝙰𝚅𝙴 🤗`) })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i 
handler.exp = 40
handler.level = 2
export default handler
