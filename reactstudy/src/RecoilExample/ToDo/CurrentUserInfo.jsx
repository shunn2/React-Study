import axios from "axios";
import React from "react";
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ErrorBoundary from "./ErrorBoundary";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

const tableOfUsers = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];

const currentUserNameState = selector({
  key: "CurrentUserName",
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name;
  },
});

const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await axios(`/api/user-name?id=${get(currentUserIDState)}`);
    return response.data.name;
  },
});

function CurrentUser() {
  const userName = useRecoilValue(currentUserNameQuery);
  const [id, setId] = useRecoilState(currentUserIDState);

  return (
    <div>
      {userName}
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
    </div>
  );
}

export default function CurrentUserInfo() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUser />
      </React.Suspense>
    </ErrorBoundary>
  );
}
