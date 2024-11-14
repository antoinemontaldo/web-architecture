import { task } from './task.model';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    create(description: string): Promise<Task>;
    findAll(): Promise<Task[]>;
    getById(id: number): Promise<Task>;
    deleteTask(id: number): Promise<boolean>;
    updateTask(id: number, task: task): Promise<boolean>;
}
