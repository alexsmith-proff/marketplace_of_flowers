import { genSalt, hash } from 'bcryptjs';
import { UserEntity } from './entities/user.entity';
import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }


  // async getUser(token: string): Promise<UserEntity> {
  //   const id = 17
  //   const user = await this.userRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  //   if (!user) throw new HttpException('Юзер не найден', HttpStatus.UNAUTHORIZED)
  //   return user;
  // }

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }


  async getById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) throw new HttpException('Юзер не найден', HttpStatus.UNAUTHORIZED)
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user: UserEntity = await this.getById(id);
    user.email = updateUserDto.email;

    if (updateUserDto.password) {
      const salt = await genSalt(7);
      user.password = await hash(updateUserDto.password, salt);
    }
    user.name = updateUserDto.name;
    user.role = updateUserDto.role;
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user: UserEntity = await this.getById(id);
    if (!user) throw new NotFoundException('Юзер не найден');
    return await this.userRepository.delete(id);
  }
}
