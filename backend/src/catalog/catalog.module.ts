import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogResolver } from './catalog.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogEntity } from './entities/catalog.entity';
import { CatalogController } from './catalog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CatalogEntity])],
  providers: [CatalogResolver, CatalogService],
  controllers: [CatalogController]
})
export class CatalogModule {}
