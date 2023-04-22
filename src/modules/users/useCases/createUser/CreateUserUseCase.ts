 import { AppError } from "../../../../errors/AppError";
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
      throw new AppError("user already exists!");
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
