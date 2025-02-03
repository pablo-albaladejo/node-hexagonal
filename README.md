# express-starter

[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://www.typescriptlang.org/)
![GitHub Repo Size](https://img.shields.io/github/repo-size/gonzaloplaza/nextjs-starter)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the index response by modifying the file
`src/adapters/handlers/indexHandler.ts`. The server auto-updates as you edit the file.

### Build Docker image for production

You can build an optimized Docker production-ready image with the standard command:

```sh
docker build -t express-starter .
```

And then run the container passing environment variables if needed within the initialization:

```sh
docker run --rm -it -p 3000:3000 --name express-starter express-starter
```

## Learn More

To learn more about Express, take a look at the following resources:

- [Express Documentation](https://expressjs.com/en/guide/migrating-5.html) - learn about Express 5
  features and API.
