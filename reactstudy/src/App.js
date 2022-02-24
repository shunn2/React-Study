// import React from "react";
// import { RecoilRoot } from "recoil";
// import CharacterCounter from "./RecoilExample/CharacterCount";
// import FontButton from "./RecoilExample/FontButton";
// import Text from "./RecoilExample/Text";
// import CurrentUserInfo from "./RecoilExample/ToDo/CurrentUserInfo";
// import ToDoList from "./RecoilExample/ToDo/ToDoList";

// export default function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <FontButton />
//         <Text />
//         <CharacterCounter />
//         <ToDoList />
//         <CurrentUserInfo />
//       </RecoilRoot>
//     </div>
//   );
// }

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Example from "./ReactQuery/Example";
import QuickStart from "./ReactQuery/QuickStart";
import { ReactQueryDevtools } from "react-query/devtools";
import Pagination from "./ReactQuery/Pagination";
import InfiniteScroll from "./ReactQuery/InfiniteScroll";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <QuickStart />
      {/* <Pagination /> */}
      <InfiniteScroll />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
