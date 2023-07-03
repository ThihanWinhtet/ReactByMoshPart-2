import { ReactNode, useReducer } from "react";
import TaskConext from "./taskContext";


export interface Task {
  id: number;
  title: string;
}

export interface AddTask {
  type : 'ADD',
  task : Task
}

export interface DeleteTask {
  type : 'DELETE',
  taskID : number
}

const taskReducer = (tasks : Task[], action : AddTask | DeleteTask): Task[] => {
if (action.type === 'ADD') return [action.task, ...tasks]; 
if (action.type === 'DELETE') return tasks.filter(t => t.id !== action.taskID); 
return [];
}

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  let [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskConext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskConext.Provider>
  );
};

export default AuthProvider;
