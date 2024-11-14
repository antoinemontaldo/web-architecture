import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { task } from './task.model';
@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    async getAllTasks() {
        return await this.tasksService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        const taskPromise = await this.tasksService.getById(id);

        if (taskPromise) {
            return taskPromise;
        }
        throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }

    @Post()
    async createTask(@Body() task: task) {
        this.tasksService.create(task.description);
        return { message: 'Task created' };
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: number) {
        const deleteResult = await this.tasksService.deleteTask(id);
        if (deleteResult) {
            return { message: 'Task deleted' };
        }
        throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
    @Put(':id')
    async updateTask(@Param('id') id: number, @Body() task: task) {
        const updateResult = await this.tasksService.updateTask(id, task);
        if (updateResult) {
            return { message: 'Task updated' };
        }
        throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
}
