import { Discussion } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { CreateDiscussionDTO } from "../dtos/CreateDiscussionDTO";
import { AppError } from "../../../errors/AppError";

export class CreateDiscussionUseCase {
  async execute({
    title,
    content,
    authorId,
  }: CreateDiscussionDTO): Promise<Discussion> {
    const isValidUser = await prisma.user.findUnique({
      where: {
        id: authorId,
      },
    });

    if (!isValidUser) {
      throw new AppError("invalid user!");
    }

    const discussion = await prisma.discussion.create({
      data: {
        title,
        content,
        authorId,
      },
    });

    return discussion;
  }
}
