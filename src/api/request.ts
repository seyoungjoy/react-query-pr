import axios from "axios";

interface paramType {
    userId:number;
    id:number;
    title:string;
    body:string;
}

// get
export const getTitleData = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
}

// post
export const postData = async (param:paramType) => {
    const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts", param)
    return data;
}
