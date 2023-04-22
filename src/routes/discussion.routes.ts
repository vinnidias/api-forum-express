import { Router } from "express";
import { CreateDiscussionController } from "../modules/discussions/useCases/CreateDiscussionController";

const createDiscussionControler = new CreateDiscussionController();

const discussionRoutes = Router();

discussionRoutes.post("/", createDiscussionControler.handle);

export { discussionRoutes };
