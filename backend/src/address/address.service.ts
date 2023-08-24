import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { UpdateAddressInput } from './dto/update-address.input';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>
  ){}

  async create(createAddressInput: CreateAddressInput) {
    const newAddress = {...createAddressInput,
      user_ref: { id: createAddressInput.user_id }
    }
    return await this.addressRepository.save(newAddress)
  }

  async findAll() {
    return await this.addressRepository.find()
  }

  async findOne(id: number) {
    return await this.addressRepository.findOne({
      where: {id}
    })
  }

  async update(id: number, updateAddressInput: UpdateAddressInput) {
    const address = await this.findOne(id)
    const newAddress = { ...address, ...updateAddressInput }
    return await this.addressRepository.save(newAddress)
  }

  async remove(id: number) {
    const address = await this.findOne(id)
    await this.addressRepository.delete(id)
    return address
  }
}
