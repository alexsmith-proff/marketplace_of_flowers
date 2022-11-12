import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandResolver } from './brand.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEntity } from './entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandEntity])],
  providers: [BrandResolver, BrandService]
})
export class BrandModule {}
