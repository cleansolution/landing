#!/usr/bin/env node
// Builds with production indexing ON (as Netlify's production context would) and audits it.
// Does not deploy anything. Afterwards run `npm run build` again for a normal local build.
import { spawnSync } from 'node:child_process';

const env = { ...process.env, PUBLIC_ALLOW_INDEXING: 'true' };
const run = (cmd, args) => {
  const r = spawnSync(cmd, args, { stdio: 'inherit', env, shell: process.platform === 'win32' });
  if (r.status !== 0) process.exit(r.status ?? 1);
};
run('npx', ['astro', 'build']);
run('node', ['scripts/seo-audit.mjs']);
