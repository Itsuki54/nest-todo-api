import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskPropertyDto } from './dto/task-property.dto';
import { TaskStatusPipe } from './pipe/task-status.pipe';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(
        private tasksService: TasksService
    ) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTaskById(
        @Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() taskPropertyDto: TaskPropertyDto
        ): Promise<Task> {
        return this.tasksService.createTask(taskPropertyDto);
    }

    @Delete('/:id')
    deleteTask(
        @Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.tasksService.deleteTask(id);
    }

    @Patch('/:id')
    updateTask(
        @Param('id', ParseIntPipe) id: number,
        @Body('status',TaskStatusPipe) status: string ): Promise<Task> {
        return this.tasksService.updateTask(id, status);
    }
}