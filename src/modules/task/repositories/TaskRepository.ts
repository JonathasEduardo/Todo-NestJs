import { Task } from '../entities/Task';

export abstract class TaskRepository {
  abstract create(user: Task): Promise<void>;
}
