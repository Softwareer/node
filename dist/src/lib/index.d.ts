export declare class SoftwareerNode {
    key: string;
    constructor(key: string);
    getPosts(page?: Number, limit?: Number): Promise<any>;
    getPost(id: string): Promise<any>;
    getProjects(page?: Number, limit?: Number): Promise<any>;
    getProject(id: string): Promise<any>;
    getSkills(): Promise<any>;
    convertBase64ToString(base64: string): string;
}
