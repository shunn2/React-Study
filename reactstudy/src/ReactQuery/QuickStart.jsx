import React from "react";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
// import GlobalLoadingIndicator from "./GlobalLoader";
import { getTodos, postTodo } from "./my-api";

export default function QuickStart() {
  const queryClient = useQueryClient(); // 밖에서 감싸져 있는 client 가져올 수 있음.
  const query = useQuery("todos", getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  }); //mutate가 성공하면 값을 invalid 시키겠다. -> 바로 반영됨.

  if (query.isLoading) {
    return "Loading...";
  }
  if (query.isLoading) {
    return "Error...";
  }

  return (
    <div>
      {/* <GlobalLoadingIndicator /> */}
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "learn react-query",
          });
        }}
      >
        Add todo
      </button>
    </div>
  );
}
