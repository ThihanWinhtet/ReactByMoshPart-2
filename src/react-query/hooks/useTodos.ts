import { useQuery } from "@tanstack/react-query";
import APIClient from '../../services/ApiClient';
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

const apiClient = new APIClient<Todo>('/todos');

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const useToDos = () =>{
  return useQuery<Todo[], Error>({
    queryKey : CACHE_KEY_TODOS,
    queryFn : apiClient.getAll
  });

}

export default useToDos;