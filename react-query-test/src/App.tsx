import './App.css'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { fetchPostsData, postData } from "./api/request";


function App() {
    const queryClient = new QueryClient();
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
            <Todos/>
        </QueryClientProvider>
    </div>
  )
}

interface postType {
    id:number;
    title:string;
}

function Todos(){
    const { data, isLoading, isError, error} = useQuery(["posts", ], fetchPostsData);

    return(
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                data?.map((post:postType)=>(
                    <div key={post.id}>
                        <p>title : {post.title}</p>
                    </div>
                ))
            )}

        </div>
    )
}

export default App
