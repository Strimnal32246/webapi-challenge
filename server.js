const express = require("express");
const server = express();

const actionsRouter = require("./routers/actionRouters");
const projectRouter = require("./routers/projecrRouter");

server.use(express.json());
server.use(logger);
server.use("/actions", actionsRouter);
server.use("/projects", projectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ Success: "Server up and running" });
});

let actions = [
  {
    id: 1,
    project_id: 2,
    description: " Build API Endpoints",
    notes: "This is magic!",
    completed: false
  },
  {
    id: 3,
    project_id: 1,
    description: "Design and Build API Endpoints",
    notes: "This is where the magic happens!",
    completed: false
  }
];
let nextId = 4;

// and modify the post endpoint like so:
server.post("/actions", (req, res) => {
  const projects = req.body;
  projects.id = nextId++;

  actions.push(projects);

  res.status(201).json(projects);
});
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}]${req.method} to ${req.url} from ${req.get(
      "host"
    )}`
  );
  next();
}

module.exports = server;
