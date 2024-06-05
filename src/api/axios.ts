import axios from "axios";

export function getAPIClient() {
  const api = axios.create({
    baseURL: "https://randomuser.me/api",
    responseType: "json",
  });

  return api;
}

export async function fetchRandomUser() {
  const api = getAPIClient();
    const response = await api.get('/');
    const user = response.data.results[0];
    return user;
  
}
