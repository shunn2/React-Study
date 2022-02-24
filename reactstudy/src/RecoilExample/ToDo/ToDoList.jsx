import React from "react";
import { useRecoilValue } from "recoil";
import ToDoCreator from "./ToDoCreator";
import ToDoItem from "./ToDoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState, todoListState } from "./ToDoStore";

export default function ToDoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <ToDoCreator />
      {todoList.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
