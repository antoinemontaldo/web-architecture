import { TasksService } from './tasks.service';
import { task } from './task.model';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Promise<import("./task.entity").Task[]>;
    getById(id: number): Promise<import("./task.entity").Task>;
    createTask(task: task): Promise<{
        message: string;
    }>;
    deleteTask(id: number): Promise<{
        message: string;
    }>;
    updateTask(id: number, task: task): Promise<{
        message: string;
    }>;
}
