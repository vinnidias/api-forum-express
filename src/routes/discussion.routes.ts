import { Router } from "express";
import { CreateDiscussionController } from "../modules/discussions/useCases/createDiscussion/CreateDiscussionController";
import { GetDiscussionController } from "../modules/discussions/useCases/getDiscussion/GetDiscussionController";

const createDiscussionController = new CreateDiscussionController();
const getDiscussionController = new GetDiscussionController()


const discussionRoutes = Router();

discussionRoutes.post("/", createDiscussionController.handle);
discussionRoutes.get("/", getDiscussionController.handle)

export { discussionRoutes };
