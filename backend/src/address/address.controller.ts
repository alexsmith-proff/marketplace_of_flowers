import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Controller('api/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('create')
  create(@Body() createAddressInput: CreateAddressInput) {
    return this.addressService.create(createAddressInput);
  }

  @Get('all')
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressInput: UpdateAddressInput) {
    return this.addressService.update(+id, updateAddressInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}