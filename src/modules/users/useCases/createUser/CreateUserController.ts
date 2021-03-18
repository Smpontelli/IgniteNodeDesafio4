import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    try {
      const newUser = this.createUserUseCase.execute({ email, name });

      return response.status(201).json(newUser);
    } catch (error) {
      return response
        .status(400)
        .json({ error: "It was not possible to create a new user" });
    }
  }
}

export { CreateUserController };
