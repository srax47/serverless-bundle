import * as Knex from "knex";

function getConnection() {
  return Knex({
    client: "pg",
    connection: "postgres://postgres:password1@localhost:5432/postgres",
    searchPath: ["knex", "public"],
  });
}

// eslint-disable-next-line no-unused-vars
export const hello = async (event, _context) => {
  getConnection();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  };
};
