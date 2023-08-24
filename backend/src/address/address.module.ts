import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AddressEntity])
  ],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}
