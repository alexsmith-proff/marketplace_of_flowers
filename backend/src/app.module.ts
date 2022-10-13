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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
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
        entities: [UserEntity, MenuEntity, MenuItemEntity, SubmenuItemEntity, SectionEntity, ElementEntity, TextElementEntity, ImgElementEntity],
        synchronize: true,        
      })
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true 
    }),
  
    UserModule, AuthModule, MenuModule, MenuItemModule, SubmenuItemModule, SectionModule, ElementModule, TextElementModule, ImgElementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
