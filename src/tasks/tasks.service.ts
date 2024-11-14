import { Injectable } from '@nestjs/common';
import { task } from './task.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { Status } from './status.model';
@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>) { }


    async create(description: string): Promise<Task> {
        const task = this.tasksRepository.create({ description, status: Status.CREATING });
        return this.tasksRepository.save(task);
    }

    async findAll(): Promise<Task[]> {
        return this.tasksRepository.find();
    }

    async getById(id: number) {
        return this.tasksRepository.findOneBy({ id });
    }


    async deleteTask(id: number): Promise<boolean> {
        const task = await this.tasksRepository.findOneBy({ id });
        if (!task) {
            return false;
        }
        this.tasksRepository.delete(id);
        return true;
    }

    async updateTask(id: number, task: task): Promise<boolean> {
        const taskToUpdate = await this.tasksRepository.findOneBy({ id });
        if (!taskToUpdate) {
            return false;
        }
        taskToUpdate.description = task.description;
        taskToUpdate.status = task.status;
        this.tasksRepository.save(taskToUpdate);
        return true;
    }
}

