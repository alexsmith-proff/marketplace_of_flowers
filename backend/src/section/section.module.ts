import { SectionEntity } from './entities/section.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionResolver } from './section.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([SectionEntity])],
  providers: [SectionResolver, SectionService]
})
export class SectionModule {}
