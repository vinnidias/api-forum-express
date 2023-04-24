import { Discussion } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetDiscussionUseCase {
  async execute(): Promise<Discussion[]> {
    const allDiscussion = await prisma.discussion.findMany({
      orderBy: {
        created_at: "asc",
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
        comment: {
          select: {
            content: true,
            author: {
              select: {
                name: true,
              },
            },
            created_at: true,
          },
        },
      },
    });

    return allDiscussion;
  }
}
