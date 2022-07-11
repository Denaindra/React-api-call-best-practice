import apiClient from "./Client";

export const getPosts = () => apiClient.get("/posts");