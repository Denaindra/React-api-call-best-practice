import apiClient from "./Client";
export const getComments = () => apiClient.get("/comments");