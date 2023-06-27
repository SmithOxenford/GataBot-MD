let handler = async (m, { command, usedPrefix, DevMode, args, conn }) => {
const valoracion = { valorar1: '𝙼𝚄𝚈 𝙰𝙻𝚃𝙰 80% - 100%', valorar2: '𝙰𝙻𝚃𝙰 60% - 79%', valorar3: '𝙼𝙴𝙳𝙸𝙰 40% - 59%', valorar4: '𝙱𝙰𝙹𝙰 20% - 39%', valorar5: '𝙼𝚄𝚈 𝙱𝙰𝙹𝙰 0% - 19%' }

const categorias = {
exp: {
categoria: 'Categoria 1',
descripcion: 'Experiencia',
ataque: '',
defensa: '',
utilidad: valoracion.valorar1,
abundancia: valoracion[0]
},
stamina: {
categoria: 'Categoria 2',
descripcion: 'Energia',
ataque: '',
defensa: '',
utilidad: 'Medianamente alta',
abundancia: 'Medianamente poca' 
}
}
m.reply(categorias.exp.utilidad)
}
handler.command = /^(colección|coleccion|inforpg|set|collection)$/i

export default handler
