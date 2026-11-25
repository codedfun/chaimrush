# Chaim Rush

A 3D endless runner for phones. Put a face on the runner and a face on the chaser, then dodge trains through a city at sunset for as long as you can.

## How to play

- **Swipe left or right** to switch lanes.
- **Swipe up** to jump over barriers.
- **Swipe down** to slide under gates.
- **Tap the screen** (or the boomerang button) to throw your boomerang; **double-tap** to ride a hoverboard down your lane. It destroys the first train, barrier or gate it hits, picks up coins on the way, and flies back to your hand. It can be thrown once every 3 seconds; the button shows the countdown.
- **Ramps** lead up onto some trains. Run up them to travel along the train roofs and grab the coins up there.
- **Bridges** cross over the tracks every so often. A parked train with a ramp sits in front of each one: run up the ramp, along the roof, and jump from the end of the train onto the bridge. Up top are lines of coins and usually a bonus (a jetpack, magnet or jump boots, and sometimes a hoverboard or even a key). Run off the far end to drop back to the tracks, or just run underneath.
- Only running into an obstacle counts. If your feet just clip the top of a barricade or train, you land on it and keep going.
- Bump into something once and the chaser closes in; bump again before they fall back and you're caught. Running straight into a train ends the run.

## Keys

Every 1,000 coins you collect, added up across all your runs, earns a key. Keys are saved on that phone. When you're caught and have a key, you get 6 seconds to use one and keep running from where you were, with a few seconds of protection.

## Power-ups

Power-ups float above the tracks inside a tall colored light column, so you can spot them from far away: green for boots, red for the magnet, orange for the jetpack.


- **Hoverboard (every 200 coins, up to 3 saved):** double-tap the screen (or tap the hoverboard counter) to ride one. While you ride, for up to 30 seconds, the board takes the next crash for you: it wrecks, you hop clear and pass through obstacles for about two seconds, and the chaser drops back. Saved boards don't protect you until you ride them, and any you haven't ridden carry over to your next run (they're kept on that phone).
- **Jetpack (found on the tracks, rarer than the others):** 18 seconds of flight above the trains, through long trails of coins. The chaser gets a jetpack too and flies right up behind you. When the fuel runs out you drop back to the tracks with a few seconds of protection, and the chaser falls back.
- **Coin magnet (found on the tracks now and then):** for 30 seconds, nearby coins in every lane, including ones above or below you, fly to you on their own. A small magnet floats beside the runner while it lasts.
- **Jump boots (found on the tracks now and then):** 30 seconds of extra-high jumps, high enough to clear a train. The runner wears big green spring boots while they last, and any coins you jump over are still collected. They flicker in the last 3 seconds.

The game has an original dark, cinematic soundtrack generated in the browser (a driving low string ostinato, heavy brass hits with sub drops, drums, drones and rising tension), which intensifies during the jetpack. Use the music button to turn it off, or the speaker button to mute everything.

On a computer, use the arrow keys (or WASD) to move, F or Enter to throw, B to ride a hoverboard, and Escape to pause.

## Faces

Tap **Add photo** on the start screen, then drag and zoom to fit the face in the circle. Photos are kept only on that phone and are never uploaded. The faces are wrapped onto 3D heads that turn toward the camera so they're always visible.

## More games

The **More games** button at the bottom of the start screen opens `games/`, a page of extra games under the Chaim Rush name.

- **Chaim Quest** (`games/quest.html`): an original side-scrolling platformer across city rooftops. Put your own face on the hero (or reuse your Chaim Rush runner face), stomp slimes, avoid spiky rollers and spikes, bump star crates for coins, ride moving platforms and reach the glowing door. You start each level small: some star crates hold a **Power Gem** that makes you big, or a **Spark Orb** (if you're already big) that lets you throw bouncing sparks with the bolt button; a rare crate holds a **heart** (extra life). When a monster or spikes hit you, you lose your sparks first, then shrink, and only lose a life if you're hit while small. Big heroes can smash red bricks from below. Three levels; finishing one unlocks the next. On a phone, use the left/right buttons and the jump button (hold for a higher jump).

- **ChaimLand** (`games/land.html`): an original 3D block world, 1,024 × 1,024 blocks, with hills, mountains, lakes, beaches, forests and flowers, generated as you explore. You play a blocky explorer seen from behind (third person). Tap **Choose a photo** on the start card or in the menu to put any face on the explorer (drag and zoom to fit it in the square), or use your Chaim Rush face; the photo stays on the phone. Use the joystick to walk and the up arrow to jump (you hop up single steps on your own); drag to look around and pinch to zoom the camera. The eye button switches between third person (you see your explorer) and first person (you see through their eyes, so nothing blocks your view in tunnels); the choice is remembered. Tap **Fly** (or double-tap jump) to fly freely: hold up to rise and down to sink. Pick a block from the bar at the bottom and tap a block near you to build; switch to **Break** to remove blocks. Blocks: grass, dirt, sand, stone, brick, wood, leaves, water, flowers, train tracks, lamps, fire and TNT, plus **trains** that drive themselves along tracks. Walk up to a train and tap it to climb into the cab and drive it yourself: joystick up goes forward, down goes backward, and the jump button gets you out. The ground goes about 50 blocks deep, so you can dig shafts and tunnels: stone gives way to dark deep rock with rare glowing crystals, down to unbreakable bedrock, and it gets darker the further underground you go (lamps and crystals light your tunnels). Start at a clearing with a brick house and a railway loop. Tap TNT with Break (or put fire next to it) to blow it up. Lamps glow at night. Only your changes are saved on the phone, and builds from the earlier, smaller ChaimLand are moved into the starting clearing.

- **Masquerade Calls** (`games/masquerade.html`): voice calls between two phones with your voice changed live (pitch, people, characters and effects), copied from the `dont-do-it` project. Each phone gets a 6-digit code; calls go directly between the phones through the free public PeerJS server, so it needs an internet connection and the microphone, and works with the original Masquerade site too.
- **Last Card** (`games/cards.html`): an original color-and-number matching card game for 2 to 6 players. Match the top card's color or number, or play a wild and pick the color; skip, reverse and +2 cards hit the next player, and a wild +4 makes them pick up four. Get down to one card and tap **Last card!** within 3 seconds, or pick up 2. Play **vs 1 to 5 bots** (works offline), or **create a room**: friends enter its 4-digit code on their own phones, the host can add bots to empty seats, and the host's phone deals and checks every move so each phone only sees its own hand. If someone leaves mid-game a bot takes their seat. Rooms connect through the free public PeerJS server.
- **Four in a Row** (`games/four.html`): drop red and yellow discs and get four in a line, against the computer, a friend on the same phone, or a friend on another phone. For **Online**, each phone gets a 3-digit PIN; enter your friend's PIN and they tap Play to accept. The two phones connect directly to each other (WebRTC), introduced by the free public PeerJS server, so online play needs an internet connection; Wi-Fi on both phones works best, since some mobile-data networks block direct connections. The PeerJS client (1.5.4, MIT license) is in `vendor/`.

## Add it to your Home Screen

On iPhone or iPad, open the game in Safari, tap **Share**, then **Add to Home Screen**. It appears as **Chaim Rush** with its own icon and opens full screen. The start screen shows these steps too (and Android's), and hides them once you're playing from the Home Screen.

## Playing offline

After the site has been opened once with a connection, it works with no Wi-Fi or data at all, including from the Home Screen icon. `sw.js` saves the games, the 3D engine and the fonts on the phone; when online it still fetches the newest version (waiting at most 2.5 seconds for a page) and refreshes the saved copy in the background.

## Running it

The game is a single file, `index.html`, with no build step; `manifest.webmanifest` and the icon PNGs set the app's name and Home Screen icon. The three.js 3D engine (version 0.149.0, MIT license) and the PeerJS client (1.5.4, MIT license) are in `vendor/`, and the Bungee and Rubik fonts (SIL Open Font License) are in `fonts/`, so nothing is loaded from other websites. It's served by GitHub Pages from the `main` branch.
