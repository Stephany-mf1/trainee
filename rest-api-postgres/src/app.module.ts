import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.ORM_HOST,
      port: Number.parseInt(process.env.ORM_PORT),
      username: process.env.ORM_USER,
      password: process.env.ORM_PASS,
      database: process.env.ORM_DB,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    StudentsModule,
  ],
})
export class AppModule {}
