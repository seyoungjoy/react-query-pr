import './App.css'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { getTitleData, postData } from "./api/request";
import {useEffect} from "react";
import {createBrowserRouter, Link} from "react-router-dom";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import InvalidateQueries from "./components/InvalidateQueries";
import UseMutation from "./components/UseMutation";


function App() {
    // queryClient instance 생성
    const queryClient = new QueryClient();
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
            <Nav/>
            <InvalidateQueries/>
            {/*<UseMutation/>*/}
            {/*<Todos/>*/}
            <ReactQueryDevtools initialIsOpen/>
        </QueryClientProvider>
    </div>
  )
}

function Nav(){
    return(
        <nav>
            <ul>
                <li><a href="#">home</a></li>
            </ul>
        </nav>
    )
}

interface postType {
    id:number;
    title:string;
}

function Todos(){
    const queryClient = useQueryClient();


    const { data : titleData, isLoading, isSuccess, isError, error} = useQuery(["titleData"], getTitleData, {
        staleTime:5000,
    });

    return(
        <>
        <div>
            {!isLoading ? (
                titleData.map((post: postType) => (
                    <div key={post.id}>
                        <p>title : {post.title}</p>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}

        </div>
        </>
    )
}

export default App
