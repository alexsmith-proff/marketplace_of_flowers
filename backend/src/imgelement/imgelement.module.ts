import { ImgElementEntity } from './entities/imgelement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ImgElementService } from './imgelement.service';
import { ImgElementResolver } from './imgelement.resolver';
import { ImgElementController } from './imgelement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ImgElementEntity])],
  controllers: [ImgElementController],
  providers: [ImgElementResolver, ImgElementService]
})
export class ImgElementModule {}
