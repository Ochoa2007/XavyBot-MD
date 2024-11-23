import fs from 'fs';

const handler = async (m, { conn, isROwner }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
  const tradutor = _translate.plugins.owner_restart;

  if (!isROwner) throw tradutor.texto1; // Solo el dueño puede usar este comando
  
  await m.reply(tradutor.texto2); // Mensaje de confirmación de reinicio
  
  try {
    setTimeout(() => {
      process.exit(1); // Fuerza el cierre con un código de error para asegurar el reinicio
    }, 1000); // Espera 1 segundo antes de salir
  } catch (e) {
    console.error("Error al intentar reiniciar el bot:", e);
  }
};

handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;

export default handler;
