import { SectionEntity } from './section/entities/section.entity';
import { ImgElementEntity } from './imgelement/entities/imgelement.entity';
import { TextElementEntity } from './textelement/entities/textelement.entity';
import { ElementEntity } from './element/entities/element.entity';
import { MenuEntity } from './menu/entities/menu.entity';
import { MenuItemEntity } from './menuitem/entities/menuitem.entity';
import { SubmenuItemEntity } from './submenuitem/entities/submenuitem.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { MenuModule } from './menu/menu.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SubmenuItemModule } from './submenuitem/submenuitem.module';
import { MenuItemModule } from './menuitem/menuitem.module';
import { ElementModule } from './element/element.module';
import { TextElementModule } from './textelement/textelement.module';
import { ImgElementModule } from './imgelement/imgelement.module';
import { SectionModule } from './section/section.module';

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
