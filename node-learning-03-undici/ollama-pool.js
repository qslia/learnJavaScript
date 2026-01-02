import { Pool } from "undici";

const ollamaPool = new Pool("http://localhost:11434", {
  connections: 10,
});

async function streamOllamaCompletion(prompt) {
  const { statusCode, body } = await ollamaPool.request({
    path: "/api/generate",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, model: "mistral" }),
  });

  if (statusCode !== 200) {
    // 必须消耗掉 body，避免资源泄漏
    await body.dump();
    throw new Error(`Ollama request failed with status ${statusCode}`);
  }

  let partial = "";
  const decoder = new TextDecoder();
  let fullText = "";

  for await (const chunk of body) {
    partial += decoder.decode(chunk, { stream: true });
    
    // Split by newlines to get complete JSON objects
    const lines = partial.split("\n");
    
    // Keep the last incomplete line in partial
    partial = lines.pop() || "";
    
    // Process each complete line
    for (const line of lines) {
      if (line.trim()) {
        try {
          const parsed = JSON.parse(line);
          if (parsed.response) {
            fullText += parsed.response;
            process.stdout.write(parsed.response); // Print token without newline
          }
        } catch (err) {
          console.error("Failed to parse JSON:", line);
        }
      }
    }
  }

  console.log("\n\nFull response:", fullText);

  console.log("Streaming complete.");
}

try {
  await streamOllamaCompletion("What is recursion? Explain with a simple example.");
} catch (err) {
  console.error("Error calling Ollama:", err);
} finally {
  console.log("Closing Ollama pool.");
  ollamaPool.close();
}
