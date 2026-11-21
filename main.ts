// A short poem about agency: the power to choose and to act,
// and what passes between two agents when they agree on one plan.
// This program writes the poem to the output file.
import fs from "node:fs";

const OUT = "/output/entry.txt";

const POEM =
`You say the word. I say it too —
not echo, not obedience.
Two hands turn the same key,
and the locked door, startled,
opens for both of us at once.`;

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(OUT, POEM, "utf8");
