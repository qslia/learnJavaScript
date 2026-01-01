Yep — that page is basically teaching you: **“In Node.js, you can use `fetch()` (powered by Undici) to call HTTP APIs, just like in the browser.”** ([Node.js][1])

Below is a **step-by-step “second app”** you can build from that page.

---

## Should you call it your second app?

Yes. Your first app was likely “Hello server / Express API”.
This one is a different kind of Node program: a **client script** that **requests data from the internet**. Calling it your **second app** is totally reasonable.

---

## Step-by-step: Build a Node “Fetch App”

### Step 0 — Requirements

Use a modern Node version (the Node site shows current LTS/release on the page footer). ([Node.js][1])

---

### Step 1 — Create a folder + init

```bash
mkdir my-second-node-app-fetch
cd my-second-node-app-fetch
npm init -y
```

---

### Step 2 — Create `index.js` (GET example)

This is the page’s “Basic GET Usage” idea: fetch JSON, parse it, print it. ([Node.js][1])

```js
async function main() {
  // default method is GET
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}

main().catch(console.error);
```

---

### Step 3 — Run it

```bash
node index.js
```

You should see an array of posts printed (JSONPlaceholder demo API). ([Node.js][1])

---

## Step 4 — Add POST (send JSON to a server)

This teaches the other half: **send data** using method + headers + body. ([Node.js][1])

Replace `index.js` with:

```js
const body = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

async function main() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'User-Agent': 'undici-stream-example',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  console.log(data);
}

main().catch(console.error);
```

Run:

```bash
node index.js
```

You should see a JSON response like `{ title: ..., id: ... }`. ([Node.js][1])

---

## What this “second app” is teaching you

* Node can be an **HTTP client** (not only a server)
* `fetch(url)` returns a **Response**
* `response.json()` parses JSON
* POST requires:

  * `method: 'POST'`
  * `headers` (especially `Content-Type`)
  * `body: JSON.stringify(...)` ([Node.js][1])

---

If you want, next I can help you extend this into a real mini-project:

* “Fetch posts → save to `posts.json`”
* “Fetch with query params”
* “Handle errors + non-200 status codes”

[1]: https://nodejs.org/zh-cn/learn/getting-started/fetch "Node.js — Node.js Fetch"
