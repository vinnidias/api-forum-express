import { Request, Response } from "express";
import { CreateDiscussionUseCase } from "./CreateDiscussionUseCase";

export class CreateDiscussionController {
  async handle(req: Request, res: Response) {
    const { title, content, authorId } = req.body;
    const createDiscussionUseCase = new CreateDiscussionUseCase();

    const result = await createDiscussionUseCase.execute({
      title,
      content,
      authorId,
    });

    return res.status(201).json(result);
  }
}
