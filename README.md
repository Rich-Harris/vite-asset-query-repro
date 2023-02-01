# vite-asset-query-repro

```
git clone git@github.com:Rich-Harris/vite-asset-query-repro
cd vite-asset-query-repro
npm i
npm test
```

## Expected

```
This href attribute should not include a ?used query parameter:
<link rel="stylesheet" href="/assets/styles-88aad864.css">
```

## Actual

```
This href attribute should not include a ?used query parameter:
<link rel="stylesheet" href="/assets/styles-88aad864.css?used">
```

Note that it works in dev mode (`node app.js`).
