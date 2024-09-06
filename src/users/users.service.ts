import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserToAdminDto } from './dto/usertoAdmin.dto';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { Role } from 'src/common/enums/rol.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }
  async findOneByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findByEmailWithPassword(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password', 'role'],
    });
  }

  async findOneUser(id: number) {
    const User = await this.userRepository.findOneBy({ id });
    if (!User) {
      throw new NotFoundException('El id no existe');
    }
    return User;
  }

  async userToAdmin(id: number, user: UserActiveInterface) {
    await this.findOneUser(id);

    // Actualizar el rol del usuario a ADMIN y otros campos necesarios
    await this.userRepository.update(id, {
      role: Role.ADMIN,
      userEmail: user.email,
    });
    return this.userRepository.findOneBy({ id });
  }

  findAll() {
    return this.userRepository.find();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

