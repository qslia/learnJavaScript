const mode = process.argv[2]; // github 或 ollama

if (mode === "github") {
  await import("./github-stream.js");
} else if (mode === "ollama") {
  await import("./ollama-pool.js");
} else {
  console.log("Usage:");
  console.log("  node index.js github");
  console.log("  node index.js ollama");
}
