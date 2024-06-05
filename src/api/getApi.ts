import { api } from "./api";

export async function getUser(){
    const response = await api.get('')
    console.log(response)
}