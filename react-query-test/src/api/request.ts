import axios from "axios";


export const fetchPostsData = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
}

interface paramType {
    title:string;
    id:number;
}

export const postData = async (param:paramType) => {
    const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts", param)
    return data;
}
