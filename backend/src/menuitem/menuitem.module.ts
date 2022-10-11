import { Module } from '@nestjs/common';
import { MenuItemEntity } from './entities/menuitem.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemResolver } from './menuitem.resolver';
import { MenuItemService } from './menuitem.service';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItemEntity])],
  providers: [MenuItemResolver, MenuItemService]
})
export class MenuItemModule {}

