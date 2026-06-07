const TOKEN      = "dein_token_hier";
const CHANNEL_ID = "deine_channel_id_hier";
const DELAY = 1000; // ms zwischen Löschungen

async function deleteMessages() {
  let deleted = 0;
  while (true) {
    const res = await fetch(`https://discord.com/api/v9/channels/${CHANNEL_ID}/messages?limit=100`, {
      headers: { Authorization: TOKEN }
    });
    const messages = await res.json();
if (!Array.isArray(messages)) { console.error("API Fehler:", messages); break; }

const myId = await getMyId();
const mine = messages.filter(m => m.author.id === myId);
    if (mine.length === 0) { console.log("Fertig! Gelöscht:", deleted); break; }
    for (const msg of mine) {
      await fetch(`https://discord.com/api/v9/channels/${CHANNEL_ID}/messages/${msg.id}`, {
        method: "DELETE",
        headers: { Authorization: TOKEN }
      });
      deleted++;
      console.log(`Gelöscht #${deleted}: ${msg.id}`);
      await new Promise(r => setTimeout(r, DELAY));
    }
  }
}

let _myId;
async function getMyId() {
  if (_myId) return _myId;
  const res = await fetch("https://discord.com/api/v9/users/@me", {
    headers: { Authorization: TOKEN }
  });
  const data = await res.json();
  _myId = data.id;
  return _myId;
}

deleteMessages();
