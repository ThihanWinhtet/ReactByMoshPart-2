import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const useData = (userId : number | undefined) =>{

    return useQuery<Post[], Error>({
        queryKey : userId ? ['users', userId, 'posts'] : ['posts'],
        queryFn : () => axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
          params : {
              userId
          }
        })
        .then((res) => res.data)
    });

    
}

export default useData;