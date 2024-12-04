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
    return res.status(400).json({
      message: "Invalid Request, Email, password and name are required",
    });
  }
  next();
};

const watchListValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, userId } = req.body;
  if (!name || !userId || typeof userId !== "number") {
    return res.status(400).json({
      message: "Invalid Request, ensure name and userId are provided and userId is a number",
    });
  }
  next();
};

const editWatchListValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name, userId } = req.body;
  if (!id) {
    return res.status(400).json({
      message: "Invalid Request, ensure id is provided",
    });
  }
  if (!name || !userId) {
    return res.status(400).json({
      message: "Invalid Request, ensure name and userId are provided",
    });
  }
  next();
};

const getWatchListByIdValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Invalid Request, ensure id is provided",
    });
  }
  next();
};

const getAllUserWatchListValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({
      message: "Invalid Request, ensure userId is provided",
    });
  }
  next();
};

export interface IWatchListCreate {
  name: string;
  description?: string;
  userId: number;
}

export {
  loginValidator,
  registerValidator,
  watchListValidator,
  editWatchListValidator,
  getWatchListByIdValidator,
  getAllUserWatchListValidator,
};
