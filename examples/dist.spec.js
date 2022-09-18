const { Softwareer } = require("../dist/src");
const softwareer = new Softwareer("");

(async () => {
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