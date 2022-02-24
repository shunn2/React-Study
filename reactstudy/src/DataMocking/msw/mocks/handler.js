import { rest } from "msw";

const todos = [
  {
    id: "1",
    title: "jason 1",
  },
  {
    id: "2",
    title: "jason 2",
  },
  {
    id: "3",
    title: "jason 3",
  },
  {
    id: "4",
    title: "jason 4",
  },
  {
    id: "5",
    title: "jason 5",
  },
  {
    id: "6",
    title: "jason 6",
  },
];

export const handler = [
  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.get("http://localhost:3000/api/projects", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json({
        projects: [
          {
            id: `1-${pageIndex}`,
            name: `jason 1 - ${pageIndex}`,
          },
          {
            id: `2-${pageIndex}`,
            name: `jason 2 - ${pageIndex}`,
          },
          {
            id: `3-${pageIndex}`,
            name: `jason 3 - ${pageIndex}`,
          },
          {
            id: `4-${pageIndex}`,
            name: `jason 4 - ${pageIndex}`,
          },
          {
            id: `5-${pageIndex}`,
            name: `jason 5 - ${pageIndex}`,
          },
          {
            id: `6-${pageIndex}`,
            name: `jason 6 - ${pageIndex}`,
          },
        ],
        hasMore: pageIndex < 4,
        nextCursor: pageIndex < 4 ? parseInt(pageIndex) + 1 : undefined,
      })
    );
  }),
  rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
    const { todo } = req.body;
    console.log(JSON.stringify(todo));
    todos.push(todo);
    return res(ctx.json(true));
  }),
  rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async (req, res, ctx) => {
    const Id = req.url.searchParams.get("id");

    const originalResponse = await ctx.fetch(req);
    const originalResponseData = await originalResponse.json();

    return res(
      //   ctx.json({
      //     data: {
      //       people: [
      //         ...originalResponseData.data.people,
      //         {
      //           name: Id,
      //           age: 135,
      //         },
      //       ],
      //     },
      //   })
      ctx.status(403),
      // And a response body, if necessary
      ctx.json({
        errorMessage: `Data Not Found`,
      })
    );
  }),
];
