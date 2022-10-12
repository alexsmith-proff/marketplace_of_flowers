import { ImgElementEntity } from './entities/imgelement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ImgElementService } from './imgelement.service';
import { ImgElementResolver } from './imgelement.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ImgElementEntity])],
  providers: [ImgElementResolver, ImgElementService]
})
export class ImgElementModule {}
