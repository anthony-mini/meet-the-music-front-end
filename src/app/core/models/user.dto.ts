import { Role } from '../enums/role.enum';

export interface UserDto {
  id_user: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  role: Role;
}

export interface CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
}
