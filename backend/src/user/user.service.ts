import { genSalt, hash } from 'bcryptjs';
import { UserEntity } from './entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async getById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) throw new NotFoundException('Юзер не найден');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user: UserEntity = await this.getById(id);

    user.email = updateUserDto.email;
    console.log(updateUserDto.password);
    
    if (updateUserDto.password) {
      console.log('bbb');
      
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
