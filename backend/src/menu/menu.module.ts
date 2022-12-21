import { MenuEntity } from './entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { MenuController } from './menu.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])], 
  controllers: [MenuController],
  providers: [MenuResolver, MenuService]
})
export class MenuModule {}
