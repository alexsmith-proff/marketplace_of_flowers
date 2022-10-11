import { TextSectionEntity } from './entities/textsection.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TextSectionService } from './textsection.service';
import { TextSectionResolver } from './textsection.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([TextSectionEntity])],
  providers: [TextSectionResolver, TextSectionService]
})
export class TextSectionModule {}
