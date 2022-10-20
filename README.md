# react-query-practice
- Sever state와 Client state를 분리 및 관리해야 하는 필요성??
- query : 데이터베이스에 정보를 요청하는 것.

## useQuery
```jsx
import {useQuery} from "@tanstack/react-query";

const {data, isError, isLoading, isSuccess} = useQuery(["queryKey"], queryFn);

```
- queryKey : 캐싱, 데이터재요청 등에 사용될 수 있는 useQuery의 식별자.
- queryFn : 비동시통신으로 Promise를 반환하는 함수
- 세번째 인자로 옵션도 설정 가능
- useQuery로 비동기함수를 실행하면 data, isLoading, isSuccess, isError 등 비동기 통신에 유용한 값들을 반환한다.
- data : 반환값
- isLoading : 로딩중
- isSuccess/isError : 통신 성공, 실패
- error : 에러 내용

## State(fresh, fetching, stale, inactive)
- stale 상태 시간을 설정하여 설정한 시간만큼 refetch가 일어나지 않도록 fresh상태로 만들 수 있음.
```jsx
const { data : titleData, isLoading, isSuccess, isError, error} = useQuery(["titleData"], getTitleData, {
        staleTime:5000,
    });
```

## Initial Query Data
- 데이터 캐싱이 필요할 때
```jsx
function Todo({ todoId }) {
  const result = useQuery(['todo', todoId], () => fetch('/todos'), {
    initialData: () => {
      return queryClient.getQueryData(['todos'])?.find(d => d.id === todoId)
    },
  })
}
```
## paginated Queries

```jsx
import {useQuery} from "@tanstack/react-query";

const result = useQuery(['projects', page], fetchProjects);
```


## useMutation
- 데이터를 생성/업데이트/삭제할 때 사용

```tsx
import {useMutation} from "@tanstack/react-query";

const {data, isLoading, mutate, mutateAsync} = useMutation(mutationFn, options);

mutate(variables, {
    onError,
    onSettled,
    onSuccess
})
```

- mutationFn: (variables: Tvariables) => Promise<TData>
  - 


## Infinite Queries
## Query Options
### refetchOnWindowFocus(boolean | "always")
- 데이터가 stale 상태일 때 윈도우포커싱 될때마다 refetch를 실행하는 옵션
- default : true

## ts memo
- post 요청을 보낼 때 request값의 id값을 요청 주소에 넣어야할 때

```tsx
interface Post {
    user: string;
    title: stirng;
}

const postId = (request: Post & { postUserId: number }): Promise<AxiosResponse> => {
    return axios.post(`/post/${postUserId}`, request);
}
```

## Reference
- https://tanstack.com/query/v4/docs/guides/infinite-queries
- https://velog.io/@kimhyo_0218/series/React-Query-%EC%82%AC%EC%9A%A9%EA%B8%B0
- https://devkkiri.com/post/b3fe8ba3-46df-4cf0-b260-2c862628c0d9
