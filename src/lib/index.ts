import config from "../config.json";
import axios from "axios";

export class SoftwareerNode {
    key: string;

    constructor(key: string) {
        if (!key || typeof key !== "string") throw new Error("Key is not defined or not a string!");
        this.key = key;        

        return this;
    }

    async getPosts(page: Number = 1, limit: Number = 10) {
        const response = await (await axios.get(`${config.baseUrl}/posts?page=${page}&limit=${limit}`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || (err.message || "Something went wrong!"));
        }))?.data || null;

        if (!response) throw new Error("Key is not valid!");
        if (!response.success) throw new Error(response.message);

        return response?.data || [];
    }

    async getPost(id: string) {
        if (!id || typeof id !== "string") throw new Error("ID is not defined or not a string!");
        const response = await (await axios.get(`${config.baseUrl}/posts?id=${id}`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || (err.message || "Something went wrong!"));
        }))?.data || null;

        if (!response) throw new Error("Key is not valid!");
        if (!response.success) throw new Error(response.message);

        return response?.data || [];
    }

    async getProjects(page: Number = 1, limit: Number = 10) {
        const response = await (await axios.get(`${config.baseUrl}/projects?page=${page}&limit=${limit}`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || "Something went wrong!");
        }))?.data || null;

        if (!response) throw new Error("Key is not valid!");
        if (!response.success) throw new Error(response.message);

        return response?.data || [];
    }

    async getProject(id: string) {
        if (!id || typeof id !== "string") throw new Error("ID is not defined or not a string!");
        const response = await (await axios.get(`${config.baseUrl}/projects?id=${id}`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || "Something went wrong!");
        }))?.data || null;

        if (!response) throw new Error("Key is not valid!");
        if (!response.success) throw new Error(response.message);

        return response?.data || [];
    }

    async getSkills() {
        const response = await (await axios.get(`${config.baseUrl}/skills`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || "Something went wrong!");
        }))?.data || null;

        if (!response) throw new Error("Key is not valid!");
        if (!response.success) throw new Error(response.message);

        return response?.data || [];
    }


    public convertBase64ToString(base64: string) {
        return Buffer.from(base64, "base64").toString();
    }

}