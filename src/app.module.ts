import { Module } from '@nestjs/common';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true, //cargar entidades automaticamente
      //entities: [],
      synchronize: true, //solo en local
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

