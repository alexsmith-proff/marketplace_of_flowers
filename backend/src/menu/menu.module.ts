import { MenuEntity } from './entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { SubmenuItemEntity } from 'src/submenuitem/entities/submenuitem.entity';
import { SubmenuItemResolver } from 'src/submenuitem/submenuitem.resolver';
import { SubmenuItemService } from 'src/submenuitem/submenuitem.service';
import { SubmenuItemModule } from 'src/submenuitem/submenuitem.module';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity, SubmenuItemEntity])], 
  providers: [MenuResolver, MenuService]
})
export class MenuModule {}
