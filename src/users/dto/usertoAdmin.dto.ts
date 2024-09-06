import { IsEmail } from "class-validator";

export class UserToAdminDto {
  @IsEmail()
  email?: string;
}

