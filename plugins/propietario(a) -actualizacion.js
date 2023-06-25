import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'SmithOxenford';
const repo = 'MakanakyBot-MD';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoIIG']()} ¡¡𝙴𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙷𝙰 𝚂𝙸𝙳𝙾 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙾!!\n𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐈𝐎 : ${html_url}\n- 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐃𝐄 𝐂𝐎𝐌𝐌𝐈𝐓 : ${message}` }, { quoted: m })
   } 
  } catch (error) {
    await m.reply('⚠️ 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝚁 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 ⚠️', error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(actualizar|actualizacion)/i
handler.rowner = true
export default handler
