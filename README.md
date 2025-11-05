We are going to build a piece of an ORM usually called a query builder.

The idea is that we use typescript objects to build a SQL query up programmatically, then later we can render that object out to a string so we can send it to the database.

This allows developers to build syntactically correct queries up from pieces without having to do error-prone templating.

## Running the code
You can run the code with `bun run main.ts`
