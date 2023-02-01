import * as vite from 'vite';

const server = await vite.createServer();

await server.ssrLoadModule('/src/index.js');
await server.close();
