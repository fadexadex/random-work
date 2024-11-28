export interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
