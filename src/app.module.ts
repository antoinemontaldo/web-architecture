import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
@Module({
  imports: [TasksModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '1234',
    username: 'admin',
    entities: [Task],
    database: 'tasksdb',
    synchronize: true,
    logging: true,
  }),],
  controllers: [],
  providers: []
})
export class AppModule { }
