import {postData} from "../api/request";
import {useMutation} from "@tanstack/react-query";

interface TodoType {
    userId:number;
    id:number;
    title:string;
    body:string;
}

const {mutate, isLoading, isError, error, isSuccess} = useMutation(postData);


const UseMutationExample = () => {

    return(
        <>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : (
                    <>
                        {isSuccess && <p>todo added!</p> }
                        <button onClick={() => {
                            mutate({userId:1, id:1, title:"hi", body:"hihi"})
                        }}>작성완료</button>
                    </>
                )
            }
        </>

    )
}

export default UseMutationExample
