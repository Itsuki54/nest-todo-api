import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Task } from './tasks/task.entity'
import { TasksController } from './tasks/tasks.controller'
import { TasksService } from './tasks/tasks.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/todoapp.db',
      entities: [Task],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Task]),
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class AppModule {}
