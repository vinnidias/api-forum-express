import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "@prisma/client";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    // Verificar se o user já existe
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExist) {
      // erro
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
