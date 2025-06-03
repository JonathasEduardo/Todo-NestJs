import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

export enum TaskStatus {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

interface TaskSchema {
  name: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  userId: string; // Referência ao dono da task
}

export class Task {
  props: TaskSchema;
  _id: string;

  constructor(
    props: Replace<TaskSchema, { createdAt?: Date; status?: TaskStatus }>,
    id?: string,
  ) {
    // Substitui createdAt e status se não forem passados
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      status: props.status || TaskStatus.TO_DO,
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get description(): string {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
  }

  get status(): TaskStatus {
    return this.props.status;
  }

  set status(status: TaskStatus) {
    this.props.status = status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get userId(): string {
    return this.props.userId;
  }
}
