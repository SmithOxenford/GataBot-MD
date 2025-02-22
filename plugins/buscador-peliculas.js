/* Creado/adaptado por Bruno Sobrino (https://github.com/BrunoSobrino) */

import fetch from 'node-fetch'
import axios from 'axios'
import { load } from 'cheerio'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎 𝐌𝐀𝐋 ⊱❗️⊱╮\n\n𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙿𝙴𝙻𝙸𝙲𝚄𝙻𝙰 𝙰 𝙱𝚄𝚂𝙲𝙰𝚁 🤗'   
let aaaa = await searchC(text)
if (command == 'pelisplus') aaaa = await searchP(text)
if (aaaa == '') throw '╰⊱❌⊱ 𝐄𝐑𝐑𝐎𝐑 ⊱❌⊱╮\n\n𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙽𝙸𝙽𝙶𝚄𝙽𝙰 𝙿𝙴𝙻𝙸𝙲𝚄𝙻𝙰 𝙿𝙸𝙿𝙸𝙿𝙸 😔' 
let img = 'https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg'
if (command == 'pelisplus') img = 'https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg'
let res = await aaaa.map((v) => `🎬 • 𝐍𝐎𝐌𝐁𝐑𝐄 : _${v.title}_\n*🍿 • 𝐔𝐑𝐋 : _${v.link}_`).join`\n\n───────────────\n\n`
let ads = '*💫 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾𝚁 𝙳𝙴 𝙰𝙽𝚄𝙽𝙲𝙸𝙾𝚂 𝚁𝙴𝙲𝙾𝙼𝙴𝙽𝙳𝙰𝙳𝙾 :* 𝙱𝙻𝙾𝙲𝙺 𝚃𝙷𝙸𝚂\n⛨ • 𝐋𝐈𝐍𝐊 : https://block-this.com/block-this-latest.apk\n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\n\n'
conn.sendMessage(m.chat, { image: { url: img }, caption: ads + res }, {quoted: m})
}
handler.command = ['cuevana', 'pelisplus']
handler.level = 2
handler.money = 40
export default handler

const safeLoad = async(url, options = {}) => {
try {
const { data: pageData } = await axios.get(url, options)
const $ = load(pageData) 
return $
} catch (err) {
if (err.response)
throw new Error(err.response.statusText)
throw err }}

async function searchC(query, numberPage = 1) {
const $ = await safeLoad(`https://cuevana3.info/page/${numberPage}/`, {
params: { s: query }})
const resultSearch = []
$(".results-post > article").each((_, e) => {
const element = $(e)
const title = element.find("header > h2").text()
const link = element.find(".lnk-blk").attr("href")
resultSearch.push({ title: title, link: link })})
return resultSearch }

async function searchP(query, numberPage = 1) { 
const $ = await safeLoad(`https://pelisplushd.cx/search/`, {
params: { s: query, page: numberPage }})
const resultSearch = []
$("a[class^='Posters']").each((_, e) => {
const element = $(e)
const title = element.find(".listing-content > p").text()
const link = element.attr("href")
resultSearch.push({ title: title,  link: link })})
return resultSearch }
