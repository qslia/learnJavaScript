The `partial` looks like that because your current code **appends** every decoded chunk to `partial` without ever clearing it, so you see:

1. First chunk: `{"model":"mistral",...,"response":" sol","done":false}`
2. Second chunk gets **added** to first: 
   ```
   {"model":"mistral",...,"response":" sol","done":false}
   {"model":"mistral",...,"response":"ves","done":false}
   ```
3. Third chunk added again, and so on...

So `partial` becomes a **growing concatenation** of all the JSON objects, one after another.

---

**What's actually happening:**

Ollama's `/api/generate` endpoint returns a **stream of newline-delimited JSON** (NDJSON). Each line is a separate JSON object with one token in the `"response"` field.

**To parse this properly**, you should:

1. Split by newlines (`\n`)
2. Parse each line as JSON
3. Extract the `response` field and accumulate *just the text tokens*

Let me show you a corrected version:
Now the code:

1. **Accumulates raw bytes** in `partial`
2. **Splits by `\n`** to find complete JSON lines
3. **Parses each line** as JSON
4. **Extracts just the `response` field** (the token) and adds it to `fullText`
5. **Prints each token immediately** using `process.stdout.write()` (no newline, so it streams smoothly)

Now when you run it, you'll see the response being generated token-by-token like:
```
 Recursion is when a function calls itself...
```

instead of seeing all the raw JSON piling up!