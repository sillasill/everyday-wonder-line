import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "The bus-stop bench is still warm from the person who just left, and for a moment I am sitting in their afternoon.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
