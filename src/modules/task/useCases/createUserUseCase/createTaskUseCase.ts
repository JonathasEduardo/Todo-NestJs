import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../../repositories/TaskRepository';
import { Task, TaskStatus } from '../../entities/Task';

interface CreateTaskRequest {
  name: string;
  description: string;
  userId: string;
}

@Injectable()
export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ name, description, userId }: CreateTaskRequest) {
    const task = new Task({
      name,
      description,
      userId,
      status: TaskStatus.TO_DO,
    });

    await this.taskRepository.create(task);
  }
}
