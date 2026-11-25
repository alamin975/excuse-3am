// The 3 AM Excuse — one line a hardware wallet gives for refusing
// to sign a transaction at 3 AM.
import * as fs from "node:fs";

const entry = "It's 3 AM. My keys sleep in another timezone, and they don't do overtime — come back at sunrise.";

// Write the single excuse line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
