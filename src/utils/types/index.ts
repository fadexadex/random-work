export interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  token?: string;
}

export interface IWatchListCreate {
  name: string;
  description?: string;
  userId: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
