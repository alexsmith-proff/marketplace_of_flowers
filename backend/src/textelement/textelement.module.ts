import { TextElementEntity } from './entities/textelement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TextElementService } from './textelement.service';
import { TextElementResolver } from './textelement.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([TextElementEntity])],
  providers: [TextElementResolver, TextElementService]
})
export class TextElementModule {}
