const express = require("express");
require("./db/mongoose");

const taskRouter = require("./routes/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
