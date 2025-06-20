import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface UserSchema {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
}

export class User {
  props: UserSchema;
  _id: string;

  constructor(props: Replace<UserSchema, { createdAt?: Date }>, id?: string) {
    //Ele usa o replace para n ser necessario passar o createdAte nesse momento
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }
  get password(): string {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = password;
  }
  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
}
