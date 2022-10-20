// import {ChangeEvent, FormEvent, useCallback, useState} from "react";
// import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
// import {getTitleData, postData} from "../api/request";
// import {Fragment} from "react";
//
// interface Todo{
//     userId:number;
//     id:number;
//     title:string;
//     body:string;
// }
//
// const TodosPage = () => {
//     const [todo, setTodo] = useState('');
//     const queryClient = useQueryClient();
//
//     const {data:todos, isLoading, isError, error} = useQuery<Todo, Error>(["todos"], getTitleData, {
//         refetchOnWindowFocus: false,
//     });
//
//     const {mutate} = useMutation(postData, {
//         onSuccess: () => {
//             queryClient.invalidateQueries(["todos"]);
//         },
//     })
//
//     const onSubmit = useCallback((e:FormEvent) => {
//         e.preventDefault();
//         mutate(todo);
//         setTodo("")}, [mutate,todo]
//     )
//
//     return(
//         <>
//             <form onSubmit={onSubmit}>
//                 <label>할 일: </label>
//                 <input
//                     type="text"
//                     value={todo}
//                     onChange={(e:ChangeEvent<HTMLInputElement>) =>
//                         setTodo(e.target.value)
//                     }
//                 />
//                 <button type="submit">작성</button>
//             </form>
//
//
//             <br />
//
//
//             <div>
//                 {isLoading ? (
//                     <div>Loading...</div>
//                 ) : (
//                     todos?.map((todo) => (
//                         <Fragment key={todo.id}>
//                             <div>ID: {todo.id}</div>
//                             <div>할 일: {todo.todo}</div>
//
//
//                             <br />
//                             <hr />
//                         </Fragment>
//                     ))
//                 )}
//             </div>
//         </>
//
//     )
//
// }
//
// export default TodosPage;
