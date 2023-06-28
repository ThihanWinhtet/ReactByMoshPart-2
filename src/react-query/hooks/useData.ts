import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery{
    page : number;
    pageSize : number   
}

const useData = (query : PostQuery) =>{

    return useQuery<Post[], Error>({
        queryKey : ['posts', query],
        queryFn : () => axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
          params : {
              _start : (query.page - 1) * query.pageSize,
             _limit : query.pageSize
          }
        })
        .then((res) => res.data),
        keepPreviousData : true
    });

    
}

export default useData;