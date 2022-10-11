import { MenuEntity } from './entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  providers: [MenuResolver, MenuService]
})
export class MenuModule {}
