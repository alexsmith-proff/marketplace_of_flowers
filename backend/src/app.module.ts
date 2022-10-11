import { ImgSectionEntity } from './imgsection/entities/imgsection.entity';
import { TextSectionEntity } from './textsection/entities/textsection.entity';
import { SectionEntity } from './section/entities/section.entity';
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
import { SectionModule } from './section/section.module';
import { TextSectionModule } from './textsection/textsection.module';
import { ImgSectionModule } from './imgsection/imgsection.module';

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
        entities: [UserEntity, MenuEntity, MenuItemEntity, SubmenuItemEntity, SectionEntity, TextSectionEntity, ImgSectionEntity],
        synchronize: true,        
      })
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true 
    }),
  
    UserModule, AuthModule, MenuModule, MenuItemModule, SubmenuItemModule, SectionModule, TextSectionModule, ImgSectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
