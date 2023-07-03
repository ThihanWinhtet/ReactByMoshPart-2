import React from "react";
import { AddTask, DeleteTask, Task } from "./TaskProvider";

interface TaskContextType {
  tasks: Task[];
  dispatch: React.Dispatch<AddTask | DeleteTask>;
}

const TaskConext = React.createContext<TaskContextType>({} as TaskContextType);
export default TaskConext;
