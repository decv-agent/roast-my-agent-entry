import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "My agent says 'I've updated the file' in the exact tone of a toddler saying 'I washed my hands.'");
