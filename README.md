discord-message-purge
A lightweight Node.js script to bulk-delete your own messages from a Discord channel.

⚠️ Disclaimer: Using user tokens to automate Discord actions violates Discord's Terms of Service. Use at your own risk. This script only deletes messages authored by yourself.


English
Requirements

Node.js v18 or higher (fetch is built-in from v18)
Your Discord user token
The channel ID of the channel you want to clean up
NodeJS

How to get your User Token

Open Discord in your browser at discord.com/app
Press F12 to open DevTools
Go to the Network tab and filter for api
Reload the page or send a message
Click any request to discord.com/api → open the Headers tab → look for Authorization — that value is your token

How to get the Channel ID

In Discord, go to Settings → Advanced and enable Developer Mode
Right-click the target channel → Copy Channel ID

Setup & Usage

Clone or download this repository
Open deleteDiscordMessages.js and fill in your values:

jsconst TOKEN      = "your_token_here";
const CHANNEL_ID = "your_channel_id_here";
const DELAY      = 1000; // ms between deletions (don't go below ~500)

Run the script:

node deleteDiscordMessages.js

The script logs each deletion. When finished you'll see:

Done! Deleted: X
Notes

Requires Node.js v18+ — no dependencies, no npm install needed.
DELAY controls deletion speed. Lower values increase the risk of being rate-limited. 1000 ms is a safe default.
Only your own messages are deleted — other people's messages are never touched.
The script stops automatically once no more of your messages are found in the channel.


Deutsch
Voraussetzungen

Node.js v18 oder höher (fetch ist ab v18 eingebaut)
Dein Discord User-Token
Die Channel-ID des Kanals, den du bereinigen möchtest
NodeJS

User-Token auslesen

Discord im Browser öffnen: discord.com/app
F12 drücken → DevTools öffnen
Tab Network aufrufen und nach api filtern
Seite neu laden oder eine Nachricht senden
Eine Anfrage an discord.com/api anklicken → Headers → Wert bei Authorization — das ist dein Token

Channel-ID ermitteln

Discord-Einstellungen → Erweitert → Entwicklermodus aktivieren
Rechtsklick auf den Zielkanal → Kanal-ID kopieren
(Die Channel-ID sollte auch in der URL angezeigt werden nach https://discord.com/channels/@me/<ChannelID>

Einrichtung & Nutzung

Dieses Repository klonen oder herunterladen
deleteDiscordMessages.js öffnen und die Werte eintragen:

jsconst TOKEN      = "dein_token_hier";
const CHANNEL_ID = "deine_channel_id_hier";
const DELAY      = 1000; // ms zwischen Löschungen (nicht unter ~500 gehen)

Skript ausführen:

node deleteDiscordMessages.js

Das Skript gibt jeden Löschvorgang in der Konsole aus. Wenn alles fertig ist:

Fertig! Gelöscht: X

Hinweise:
Benötigt Node.js v18+ — keine zusätzlichen Abhängigkeiten, kein npm install nötig.
DELAY steuert die Löschgeschwindigkeit. Zu niedrige Werte erhöhen das Risiko, von der Discord-API rate-limited zu werden. 1000 ms ist ein sicherer Standardwert.
Es werden ausschließlich eigene Nachrichten gelöscht — Nachrichten anderer Nutzer werden nicht angefasst.
Das Skript stoppt automatisch, sobald keine weiteren eigenen Nachrichten im Kanal gefunden werden.


License
MIT
