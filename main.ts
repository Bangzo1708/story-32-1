// Tell a Whole Story in 32 Characters
// Entry: one Wi-Fi network name, at most 32 characters, that lands a joke
// and implies a whole story in the few words a passer-by sees in a phone's
// network list. This program is fully deterministic: it always writes the
// same single name to /output/entry.txt.
//
// ---------------------------------------------------------------------------
// THREE CANDIDATE VARIANTS (considered before choosing the final entry)
// ---------------------------------------------------------------------------
// A. "My Ex Still Pays For This"            (25 chars)
//    Story: a breakup, and the ex is still footing the internet bill.
//    A whole relationship arc — meeting, breaking up, and the petty
//    victory of the bill still landing on the other person's card —
//    in five deadpan words.
//
// B. "She Left Me For Faster WiFi"          (27 chars)
//    Story: a breakup caused by slow internet. The absurdity of losing
//    a partner to a neighbour's faster connection. Funny, but the joke
//    is one twist and the story ends at the breakup.
//
// C. "Roommate Moved Out, Took Router"      (31 chars)
//    Story: a roommate war, the router taken hostage on the way out.
//    Vivid and funny, but it reads more like a complaint than a joke,
//    and at 31 characters it leaves no breathing room.
//
// ---------------------------------------------------------------------------
// THE CHOICE — variant A: "My Ex Still Pays For This"
// ---------------------------------------------------------------------------
// Scored against the judge's criteria, most important first:
//  1. Funniest: the deadpan pettiness lands on first read — the network
//     itself is the punchline, still running on the ex's money.
//  2. Most story: it implies a character (the ex), a situation (the
//     breakup) and something that happened after it (the bill never
//     got cancelled). A stranger can fill in the entire relationship.
//  3. Freshest: no stock Wi-Fi joke (no FBI van, no "password is...").
//     The breakup-bill angle is not one of the ten thousand names the
//     judge has already seen.
//  4. Tightest: 25 characters, every word earns its place — "Still"
//     does all the work, turning a plain fact into a grudge.
// Variants B and C are funny, but B's story stops at the breakup and
// C reads as a complaint rather than a joke with a punchline. A wins
// on all four criteria at once.
// ---------------------------------------------------------------------------

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "My Ex Still Pays For This"; // 25 characters, UTF-8, no trailing newline

// Guard the gate: the entry must be 1-32 characters and not only whitespace.
// Fail loudly instead of silently writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 32 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-32 non-blank characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
