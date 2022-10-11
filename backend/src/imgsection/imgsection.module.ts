import { ImgSectionEntity } from './entities/imgsection.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ImgSectionService } from './imgsection.service';
import { ImgSectionResolver } from './imgsection.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ImgSectionEntity])],
  providers: [ImgSectionResolver, ImgSectionService]
})
export class ImgSectionModule {}
