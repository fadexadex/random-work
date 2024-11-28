import { Request, Response, NextFunction } from "express";

const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Invalid Request, Email and password are required" });
  }
  next();
};

const registerValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res
      .status(400)
      .json({
        message: "Invalid Request, Email, password and name are required",
      });
  }
  next();
};

export { loginValidator, registerValidator };
