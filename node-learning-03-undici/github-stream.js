import { Writable } from "node:stream";
import { stream } from "undici";

async function fetchGitHubRepos() {
  const url = "https://api.github.com/users/nodejs/repos";

  await stream(
    url,
    {
      method: "GET",
      headers: {
        "User-Agent": "undici-stream-example",
        Accept: "application/json",
      },
    },
    (res) => {
      let buffer = "";

      return new Writable({
        write(chunk, encoding, callback) {
          buffer += chunk.toString();
          callback();
        },
        final(callback) {
          try {
            const json = JSON.parse(buffer);
            console.log("Repository Names:");
            for (const repo of json) console.log("-", repo.name);
          } catch (err) {
            console.error("Error parsing JSON:", err);
          }
          console.log("Stream processing completed.");
          console.log(`Response status: ${res.statusCode}`);
          callback();
        },
      });
    }
  );
}

fetchGitHubRepos().catch(console.error);
