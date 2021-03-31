import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'WNVfg6j9Qv77n98Z',
      database: 'trainee',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    StudentsModule,
  ],
})
export class AppModule {}
