import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import APIClient from "../../services/ApiClient";

const apiClient = new APIClient<Todo>('/todos');

const useAddToDos = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn : 
      apiClient.post
      ,onSuccess : (savedTodo, newTodo) => {
          // queryClient.invalidateQueries({
          //   queryKey : ['todos']
          // })
          queryClient.setQueriesData<Todo[]>(['todos'], todos=> [savedTodo, ...(todos || [])]);
        }
    });
}

export default useAddToDos