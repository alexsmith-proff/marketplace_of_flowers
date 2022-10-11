import { SubmenuItemEntity } from './entities/submenuitem.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SubmenuItemService } from './submenuitem.service';
import { SubmenuItemResolver } from './submenuitem.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([SubmenuItemEntity])],
  providers: [SubmenuItemResolver, SubmenuItemService]
})
export class SubmenuItemModule {}
