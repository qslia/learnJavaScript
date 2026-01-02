I’ll first open github-stream.js to see how `await stream` is used in context, then I’ll explain it clearly.
In this file, this line:

```js
await stream(
  url,
  {
    method: "GET",
    headers: {
      "User-Agent": "undici-stream-example",
      Accept: "application/json",
    },
  },
  (res) => { /* return a Writable */ }
);
```

means:

1. `stream(...)` is an async operation from the `undici` library that:
   - Sends an HTTP request to `url`
   - Streams the response body to the `Writable` you return from the callback `(res) => { ... }`.

2. `await stream(...)` tells JavaScript:
   - “Pause the `fetchGitHubRepos` function here until the whole streaming operation is finished.”
   - Only after the `Writable` finishes processing all chunks (including `final()`), the `await` completes and the function can continue (or in this case, just return).

So in plain English:

> “Start streaming the GitHub response into my `Writable`, and don’t move on until that streaming and processing is fully done.”

If you removed `await`, `fetchGitHubRepos()` would fire off the stream and immediately finish, not waiting for the stream to complete, which could cause unexpected behavior in more complex code.