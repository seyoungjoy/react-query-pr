import axios from "axios";

interface paramType {
    title:string;
    id:number;
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
