// Name the Robot Band — make.fun entry
// Writes one funny robot band name plus a line on its hit song
// to /output/entry.txt. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The Rusty Bolts \u2014 hit single '404 Love Not Found' spent 12 weeks at number one, mostly because the jukebox couldn't skip it.";

// Gate: the sealed scorer only accepts UTF-8 text of 1-200 characters
// that is not only whitespace. Fail loudly instead of writing an
// invalid entry that would score 0 and never reach the judge.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `entry is ${ENTRY.length} characters, outside the 1-200 gate; refusing to write`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace; refusing to write");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
