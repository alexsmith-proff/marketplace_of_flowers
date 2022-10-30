import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogResolver } from './catalog.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogEntity } from './entities/catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatalogEntity])],
  providers: [CatalogResolver, CatalogService]
})
export class CatalogModule {}
