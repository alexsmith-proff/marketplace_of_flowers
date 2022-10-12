import { ElementEntity } from './entities/element.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ElementService } from './element.service';
import { ElementResolver } from './element.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ElementEntity])],
  providers: [ElementResolver, ElementService]
})
export class ElementModule {}
