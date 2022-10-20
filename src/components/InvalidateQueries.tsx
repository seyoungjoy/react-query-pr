import {useQuery} from "@tanstack/react-query";
import {getTitleData} from "../api/request";
import {Link} from "react-router-dom";
import {Fragment} from "react";
interface Post {
    userId:number;
    id:number;
    title:string;
    body:string;
}

const InvalidateQueries = () =>{
    const {data:posts, isLoading, isError, error} = useQuery<Post[], Error>(["posts"], getTitleData);

    if(isError){
        return <div>{error.message}</div>
    }

    return(
        <>
            <Nav/>
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    posts?.map((post)=> (
                        <Fragment key={post.id}>
                            <Link to={`/post/${post.id}`}>
                                <a>
                                    <div> id: {post.id}</div>
                                    <div> userId: {post.userId}</div>
                                    <div> title: {post.title}</div>
                                    <div> body: {post.body}</div>
                                </a>
                            </Link>
                        </Fragment>
                    ))
                )}
            </div>


        </>
    )

}

const Nav = () => {
    return (
        <>
            <nav style={{ display: "flex" }}>
                <Link to="/">
                    <a style={{ marginRight: "1rem" }}>Parallel Queries Page</a>
                </Link>


                <Link to="/dependent">
                    <a style={{ marginRight: "1rem" }}>Dependent Queries Page</a>
                </Link>


                <Link to="/paginated">
                    <a style={{ marginRight: "1rem" }}>Paginated Queries Page</a>
                </Link>


                <Link to="/infinite">
                    <a style={{ marginRight: "1rem" }}>Infinite Queries Page</a>
                </Link>


                <Link to="/todos">
                    <a style={{ marginRight: "1rem" }}>Mutation Page</a>
                </Link>
            </nav>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default InvalidateQueries;
