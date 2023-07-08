const delay = time => new Promise(res => setTimeout(res, time));

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date() - global.db.data.users[m.sender].lastrob < 7200000)
    throw `⏱️ 𝙴𝚂𝙿𝙴𝚁𝙰 ${msToTime(time - new Date())}\n 𝙽𝙾 𝚄𝚂𝙴𝚂 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚃𝙰𝙽 𝚁𝙰𝙿𝙸𝙳𝙾`;

  let [pesan, jumlah] = text.split('|');
  if (!pesan)
    throw `❌ 𝙳𝙴𝙱𝙴𝚂 𝙿𝚁𝙾𝙿𝙾𝚁𝙲𝙸𝙾𝙽𝙰𝚁 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰𝚂 𝙴𝙽𝚅𝙸𝙰𝚁 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎: *${usedPrefix + command}* _mensaje|cantidad_`;

  if (jumlah && isNaN(jumlah))
    throw `𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙿𝚁𝙾𝙿𝙾𝚁𝙲𝙸𝙾𝙽𝙰𝙳𝙰 𝙽𝙾 𝙴𝚂 𝚅𝙰́𝙻𝙸𝙳𝙰. 𝙰𝚂𝙴𝙶𝚄́𝚁𝙰𝚃𝙴 𝙳𝙴 𝚄𝚂𝙰𝚁 𝚄𝙽 𝙽𝚄́𝙼𝙴𝚁𝙾.\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎: *${usedPrefix + command}* _mensaje|cantidad_`;

  let fixedJumlah = jumlah ? jumlah * 1 : 10;
  if (fixedJumlah > 10)
    throw `𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝚁 𝙼𝙰́𝚂 𝙳𝙴 𝟷0 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙰 𝙻𝙰 𝚅𝙴𝚉.`;

  let groups = await conn.groupList();
  await m.reply(`📢 𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙰 ${fixedJumlah} 𝙶𝚁𝚄𝙿𝙾𝚂...`);

  for (let i = 0; i < fixedJumlah; i++) {
    if (groups[i]) {
      await delay(1000); // Retraso de 1 segundo entre cada mensaje para evitar bloqueos
      await conn.sendMessage(groups[i].jid, pesan.trim(), MessageType.text);
    }
  }

  global.db.data.users[m.sender].lastrob = new Date();
};

handler.help = ['2spamgrupos <mensaje>|<cantidad>'];
handler.tags = ['General'];
handler.command = /^2spam(grupos)?$/i;
handler.group = false;
handler.premium = false;
handler.register = true;
handler.level = 16;
handler.limit = 60;

export default handler;

function msToTime(duration) {
  // Código para convertir milisegundos a formato de tiempo legible
  // ...
}
