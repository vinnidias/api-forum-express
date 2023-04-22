import { Router } from "express";
import { userRoutes } from "./user.routes";
import { discussionRoutes } from "./discussion.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/discussion", discussionRoutes);

export { routes };
