# Chaim Rush

A 3D endless runner for phones. Put a face on the runner and a face on the chaser, then dodge trains through a city at sunset for as long as you can.

## How to play

- **Swipe left or right** to switch lanes.
- **Swipe up** to jump over barriers.
- **Swipe down** to slide under gates.
- **Tap the screen** (or the boomerang button) to throw your boomerang down your lane. It destroys the first train, barrier or gate it hits, picks up coins on the way, and flies back to your hand. It can be thrown once every 10 seconds; the button shows the countdown.
- **Ramps** lead up onto some trains. Run up them to travel along the train roofs and grab the coins up there.
- Bump into something once and the chaser closes in; bump again before they fall back and you're caught. Running straight into a train ends the run.

## Power-ups

- **Hoverboard (every 100 coins):** an extra life. A crash while riding wrecks the board instead of ending the run: you hop clear, pass through obstacles for about two seconds, and the chaser drops back. You can carry up to 3.
- **Jetpack (every 500 coins):** 30 seconds of flight above the trains, through long trails of coins. The chaser gets a jetpack too and flies right up behind you. When the fuel runs out you drop back to the tracks with a few seconds of protection, and the chaser falls back.
- **Jump boots (found on the tracks now and then):** 30 seconds of extra-high jumps, high enough to clear a train.

The game has an original electronic soundtrack generated in the browser, which picks up an extra lead line during the jetpack. Use the music button to turn it off, or the speaker button to mute everything.

On a computer, use the arrow keys (or WASD) to move, F or Enter to throw, and Escape to pause.

## Faces

Tap **Add photo** on the start screen, then drag and zoom to fit the face in the circle. Photos are kept only on that phone and are never uploaded. The faces are wrapped onto 3D heads that turn toward the camera so they're always visible.

## Running it

It's a single file, `index.html`, with no build step. It loads the three.js 3D engine (version 0.149.0) from the jsDelivr CDN and is served by GitHub Pages from the `main` branch.
