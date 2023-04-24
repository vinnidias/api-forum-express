import { Request, Response } from "express";
import { GetDiscussionUseCase } from "./GetDiscussionUseCase";

export class GetDiscussionController{
  async handle(req: Request, res: Response){
    const getDiscussionUseCase = new GetDiscussionUseCase();
    const result = await getDiscussionUseCase.execute();

    return res.status(200).json(result)
  }
}