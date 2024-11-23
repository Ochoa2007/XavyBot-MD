

const handler = async (m, {conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.fun_verdad

  global.verdad = tradutor.texto3;

  conn.reply(m.chat, `*┌────「 VERDAD 」─*\n*“${pickRandom(global.verdad)}”*\n*└────「 BOT 」─*`, m);
};
handler.help = ['verdad'];
handler.tags = ['fun'];
handler.command = /^verdad/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}


