import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userID = this.usersRepository.findById(user_id);
    if (userID.admin === false) {
      throw new Error("You dont have permission");
    }

    const userList = this.usersRepository.list();

    return userList;
  }
}

export { ListAllUsersUseCase };
