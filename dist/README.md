# [@softwareer/node](https://npmjs.com/package/@softwareer/node)
[Do you need my help? Visit our Discord server.](https://voiddevs.org/discord)

![NPM Downloads](https://img.shields.io/npm/dm/@softwareer/node?style=for-the-badge)
![License](https://img.shields.io/npm/l/@softwareer/node?style=for-the-badge)
```bash
Node Version >= 16.16.0
```

### Installation
```bash
npm i @softwareer/node --save
# or
yarn add @softwareer/node
```

<br>

### Importing

```js
// CJS
const { Softwareer } = require("@softwareer/node");
const softwareer = new Softwareer("API_KEY");

// ESM
import { Softwareer } from "@softwareer/node";
const softwareer = new Softwareer("API_KEY");
```

<br>

# Usage

```js
(async () => {
    console.log("---- Profile ----");
    const profile = await softwareer.getProfile();
    console.log(profile);

    console.log("---- Socails ----");
    const socails = await softwareer.getSocials();
    console.log(socails);

    console.log("---- Posts ----");
    const posts = await softwareer.getPosts();
    console.log(posts);

    console.log("---- Projects ----");
    const projects = await softwareer.getProjects();
    console.log(projects);

    console.log("---- Skills ----");
    const skills = await softwareer.getSkills();
    console.log(skills);

    console.log("---- Post ----");
    const post = await softwareer.getPost('');
    console.log(post);
    // const content = softwareer.convertBase64ToString(post.content);
    // console.log(content);

    console.log("---- Project ----");
    const project = await softwareer.getProject('');
    console.log(project);
})();
```

<br>

---
<h6 align="center">Developed with ❤️ by Void Development</h6>
