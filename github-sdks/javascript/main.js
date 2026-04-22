// Octokit.js
// https://github.com/octokit/core.js#readme
const { Octokit, App } = require("octokit");

console.log(`GH_TOKEN: ${process.env.GH_TOKEN}`);

const octokit = new Octokit({
  auth: process.env.GH_TOKEN
})

octokit.request('POST /repos/{owner}/{repo}/git/refs', {
  owner: 'wew226',
  repo: 'GitHub-Examples',
  ref: 'refs/heads/sdks-js',
  sha: '9d394cf9c97bc7a166b031b688a75692d8d62c33',
  headers: {
    'X-GitHub-Api-Version': '2026-03-10'
  }
})
