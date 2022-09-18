"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareerNode = void 0;
const config_json_1 = __importDefault(require("../config.json"));
const axios_1 = __importDefault(require("axios"));
class SoftwareerNode {
    key;
    constructor(key) {
        if (!key || typeof key !== "string")
            throw new Error("Key is not defined or not a string!");
        this.key = key;
        return this;
    }
    async getPosts(page = 1, limit = 10) {
        const response = await (await axios_1.default.get(`${config_json_1.default.baseUrl}/posts?page=${page}&limit=${limit}`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || (err.message || "Something went wrong!"));
        }))?.data || null;
        if (!response)
            throw new Error("Key is not valid!");
        if (!response.success)
            throw new Error(response.message);
        return response?.data || [];
    }
    async getPost(id) {
        if (!id || typeof id !== "string")
            throw new Error("ID is not defined or not a string!");
        const response = await (await axios_1.default.get(`${config_json_1.default.baseUrl}/posts?id=${id}`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || (err.message || "Something went wrong!"));
        }))?.data || null;
        if (!response)
            throw new Error("Key is not valid!");
        if (!response.success)
            throw new Error(response.message);
        return response?.data || [];
    }
    async getProjects(page = 1, limit = 10) {
        const response = await (await axios_1.default.get(`${config_json_1.default.baseUrl}/projects?page=${page}&limit=${limit}`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || "Something went wrong!");
        }))?.data || null;
        if (!response)
            throw new Error("Key is not valid!");
        if (!response.success)
            throw new Error(response.message);
        return response?.data || [];
    }
    async getProject(id) {
        if (!id || typeof id !== "string")
            throw new Error("ID is not defined or not a string!");
        const response = await (await axios_1.default.get(`${config_json_1.default.baseUrl}/projects?id=${id}`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || "Something went wrong!");
        }))?.data || null;
        if (!response)
            throw new Error("Key is not valid!");
        if (!response.success)
            throw new Error(response.message);
        return response?.data || [];
    }
    async getSkills() {
        const response = await (await axios_1.default.get(`${config_json_1.default.baseUrl}/skills`, {
            headers: {
                Authorization: this.key
            }
        }).catch(err => {
            throw new Error(err?.response?.data?.message || "Something went wrong!");
        }))?.data || null;
        if (!response)
            throw new Error("Key is not valid!");
        if (!response.success)
            throw new Error(response.message);
        return response?.data || [];
    }
    convertBase64ToString(base64) {
        return Buffer.from(base64, "base64").toString();
    }
}
exports.SoftwareerNode = SoftwareerNode;
