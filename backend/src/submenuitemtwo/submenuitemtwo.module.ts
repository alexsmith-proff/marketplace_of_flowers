import { SubmenuItemTwoEntity } from './entities/submenuitemtwo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SubmenuItemTwoService } from './submenuitemtwo.service';
import { SubmenuItemTwoResolver } from './submenuitemtwo.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([SubmenuItemTwoEntity])],
  providers: [SubmenuItemTwoResolver, SubmenuItemTwoService]
})
export class SubmenuItemTwoModule {}
