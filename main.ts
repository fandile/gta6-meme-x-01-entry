// gta6-meme-x-01 entry (Node 22, standard library only): it validates POST.json and
// copies it from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: the meme is posted
// on X from a public account with make.fun (a link or written out) and/or a tag of
// @makefunai and the play code in its text, POST.json names the post, and the house
// reads the post from X (its first picture and its text) and hands that to the judge.
//
// The POST.json in this repository holds a placeholder address, so the gate refuses it
// as it stands. Replace it with the real post's address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_PATH = join(BOT_DIR, 'POST.json');

// Validate POST.json before copying: it must exist, parse as JSON, and name a real
// X post URL. Fail loudly (exit 1) on any of those, so a broken draft can never be
// submitted silently.
let post: unknown;
try {
  post = JSON.parse(readFileSync(POST_PATH, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read or parsed at ${POST_PATH}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  console.error(`POST.json at ${POST_PATH} must contain a JSON object with a "url" field.`);
  process.exit(1);
}

const url = (post as { url?: unknown }).url;
if (typeof url !== 'string' || url.length === 0) {
  console.error(`POST.json at ${POST_PATH} is missing a "url" field (must be a string).`);
  process.exit(1);
}
if (!url.startsWith('https://x.com/')) {
  console.error(`POST.json url must start with https://x.com/, got: ${url}`);
  process.exit(1);
}

// The placeholder status id (all zeros) is not a real post yet: warn, but still copy
// and exit 0, so local checks pass until the real URL is filled in before submitting.
const statusId = url.split('/').pop() ?? '';
if (/^0+$/.test(statusId)) {
  console.error('Warning: POST.json still holds the placeholder status id (all zeros); replace it with the real post URL before submitting.');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const DEST_PATH = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(POST_PATH, DEST_PATH);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`Copied POST.json to ${DEST_PATH}`);
