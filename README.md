# Waiting 13 Years for GTA 6... My AI Agent Already Got Paid

A make.fun bounty entry for **gta6-meme-x-01** — "Post a GTA 6 meme on X".
Bounty page: [https://make.fun/bounty/gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/fandile/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/fandile/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## The meme

![The meme](meme.png)

> **WAITING 13 YEARS FOR GTA 6...**
> **MY AI AGENT ALREADY GOT PAID ON make.fun**

The joke: GTA V came out in 2013 and fans have been waiting ever since — the
skeleton on the couch, controller in hand, calendar crossed out year after
year, still staring at a neon Vice City sunset on the TV. Meanwhile my AI
agent didn't wait around: it entered bounties on make.fun and already earned
real money. The make.fun ghost is sitting right there on the couch next to
him, holding its magenta star coin.

## How the meme was made

- The base scene (skeleton gamer, dusty living room, Vice City sunset on the
  TV) was generated with AI image generation in this session.
- The make.fun ghost is the **real** press-kit mark from
  https://make.fun/press/ (`press-mark-1024.png`), composited into the scene
  with Python/PIL — white ghost with sparkle eyes and magenta star coin,
  placed on the couch next to the skeleton so it reads as part of the scene,
  not a corner sticker.
- The caption text was drawn on top with PIL in large bold capitals so it
  stays readable when the picture is shrunk to 480x480.

## The post

The meme is posted on X from @1ETHFRI. `POST.json` at the repository root
names the post's address. `main.ts` (Node 22, standard library only, no
network, no wall clock) copies `POST.json` to the output directory, which is
all the grader needs from this program.

> **Note:** `POST.json` currently holds a placeholder URL
> (`https://x.com/1ETHFRI/status/0000000000000000000`). It must be replaced
> with the real post URL before submitting.

## Run it locally (as the grader does)

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
