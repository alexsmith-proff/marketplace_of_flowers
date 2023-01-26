import { SubmenuItemTwoModule } from './submenuitemtwo/submenuitemtwo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from './user/entities/user.entity';
import { MenuEntity } from './menu/entities/menu.entity';
import { MenuItemEntity } from './menuitem/entities/menuitem.entity';
import { SubmenuItemEntity } from './submenuitem/entities/submenuitem.entity';
import { SectionEntity } from './section/entities/section.entity';
import { ElementEntity } from './element/entities/element.entity';
import { TextElementEntity } from './textelement/entities/textelement.entity';
import { ImgElementEntity } from './imgelement/entities/imgelement.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { MenuItemModule } from './menuitem/menuitem.module';
import { SubmenuItemModule } from './submenuitem/submenuitem.module';
import { SectionModule } from './section/section.module';
import { ElementModule } from './element/element.module';
import { TextElementModule } from './textelement/textelement.module';
import { ImgElementModule } from './imgelement/imgelement.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SubmenuItemTwoEntity } from './submenuitemtwo/entities/submenuitemtwo.entity';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogEntity } from './catalog/entities/catalog.entity';
import { ProductModule } from './product/product.module';
import { BrandModule } from './brand/brand.module';
import { ProductEntity } from './product/entities/product.entity';
import { BrandEntity } from './brand/entities/brand.entity';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FilterModule } from './filter/filter.module';
import { FilterelementModule } from './filterelement/filterelement.module';
import { FilterValueModule } from './filtervalue/filtervalue.module';
import * as path from 'path';
import { FilterEntity } from './filter/entities/filter.entity';
import { FilterElementEntity } from './filterelement/entities/filterelement.entity';
import { FilterValueEntity } from './filtervalue/entities/filtervalue.entity';
import { ProductFilterModule } from './product-filter/product-filter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    // С ServeStaticModule playground GraphQL http://localhost:5000/graphql - не работает
    // ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static')}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('TYPEORM_HOST'),
        port: configService.get<number>('TYPEORM_PORT'),
        username: configService.get<string>('TYPEORM_USERNAME'),
        password: configService.get<string>('TYPEORM_PASSWORD'),
        database: configService.get<string>('TYPEORM_DATABASE'),
        entities: [UserEntity,
          MenuEntity,
          MenuItemEntity,
          SubmenuItemEntity,
          SubmenuItemTwoEntity,
          CatalogEntity,
          SectionEntity,
          ElementEntity,
          TextElementEntity,
          ImgElementEntity,
          ProductEntity,
          BrandEntity,
          FilterEntity,
          FilterElementEntity,
          FilterValueEntity],
        synchronize: true,        
      })
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true 
    }),
  
    UserModule,
    AuthModule,
    MenuModule,
    MenuItemModule,
    SubmenuItemModule,
    SubmenuItemTwoModule,
    SectionModule,
    ElementModule,
    TextElementModule,
    ImgElementModule,
    CatalogModule,
    ProductModule,
    BrandModule,
    UploadModule,
    FilterModule,
    FilterelementModule,
    FilterValueModule,
    ProductFilterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
