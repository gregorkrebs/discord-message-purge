# discord-message-purge

A lightweight browser-console script to bulk-delete **your own** messages from a Discord channel.

> ⚠️ **Disclaimer:** Using user tokens to automate Discord actions violates [Discord's Terms of Service](https://discord.com/terms). Use at your own risk. This script only deletes messages authored by yourself.

---

## English

### Requirements

- A modern browser (Chrome, Firefox, Edge)
- Your Discord **user token**
- The **channel ID** you want to clean up

### How to get your User Token

1. Open Discord in your browser at [discord.com/app](https://discord.com/app)
2. Press `F12` to open DevTools
3. Go to the **Network** tab and filter for `api`
4. Reload the page or send a message
5. Click on any request to `discord.com/api`, open the **Headers** tab and look for `Authorization` — that value is your token

### How to get the Channel ID

1. In Discord, go to **Settings → Advanced** and enable **Developer Mode**
2. Right-click the channel you want to clean → **Copy Channel ID**

### Usage

1. Open the target channel in Discord (browser)
2. Press `F12` → go to the **Console** tab
3. Paste the script, replace the placeholder values:

```js
const TOKEN    = "your_token_here";
const CHANNEL_ID = "your_channel_id_here";
const DELAY    = 1000; // ms between deletions (don't go below ~500)
```

4. Press `Enter` — the script runs automatically and logs progress
5. When done you'll see: `Fertig! Gelöscht: X`

### Notes

- The `DELAY` value controls how fast messages are deleted. Lower = faster, but increases the risk of being rate-limited by Discord's API. `1000` ms is a safe default.
- The script only touches messages written by **you** — other people's messages are untouched.
- It stops automatically once no more of your messages are found in the channel.

---

## Deutsch

### Voraussetzungen

- Ein moderner Browser (Chrome, Firefox, Edge)
- Dein Discord **User-Token**
- Die **Channel-ID** des Kanals, den du bereinigen möchtest

### User-Token auslesen

1. Discord im Browser öffnen: [discord.com/app](https://discord.com/app)
2. `F12` drücken → DevTools öffnen
3. Tab **Network** aufrufen, nach `api` filtern
4. Seite neu laden oder eine Nachricht senden
5. Auf eine Anfrage an `discord.com/api` klicken → **Headers** → Wert bei `Authorization` — das ist dein Token

### Channel-ID ermitteln

1. Discord-Einstellungen → **Erweitert** → **Entwicklermodus** aktivieren
2. Rechtsklick auf den gewünschten Kanal → **Kanal-ID kopieren**

### Nutzung

1. Den Zielkanal im Browser öffnen
2. `F12` drücken → Tab **Console** öffnen
3. Skript einfügen und die Platzhalter ersetzen:

```js
const TOKEN      = "dein_token_hier";
const CHANNEL_ID = "deine_channel_id_hier";
const DELAY      = 1000; // ms zwischen Löschungen (nicht unter ~500 gehen)
```

4. `Enter` drücken — das Skript läuft und gibt Fortschritte in der Konsole aus
5. Wenn fertig erscheint: `Fertig! Gelöscht: X`

### Hinweise

- `DELAY` steuert die Löschgeschwindigkeit. Zu niedrige Werte erhöhen das Risiko, von der Discord-API rate-limited zu werden. `1000` ms ist ein sicherer Standardwert.
- Das Skript löscht **ausschließlich deine eigenen Nachrichten** — Nachrichten anderer Nutzer werden nicht angefasst.
- Es stoppt automatisch, sobald keine weiteren eigenen Nachrichten im Kanal gefunden werden.

---

## License

MIT
