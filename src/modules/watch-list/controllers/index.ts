import { Request, Response, NextFunction } from "express";
import {
  createWatchList,
  editWatchList,
  getWatchListById,
  getAllUserWatchList,
} from "../services";
import { AppError } from "../../../utils/middlewares/errorHandler";

const createWatchListCtrl = async (
  req: Request,
  res: Response, 
  next: NextFunction
) => {
  const newWatchList = await createWatchList(req.body);
  if (!newWatchList) {
    next(new AppError("Failed to create watch list", 500));
  }
  res.status(201).json(newWatchList);
};

const editWatchListCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const updatedWatchList = await editWatchList(Number(id), req.body);
  if (!updatedWatchList) {
    next(new AppError("Failed to update watch list", 500));
  }
  res.status(200).json(updatedWatchList);
};

const getWatchListByIdCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const watchList = await getWatchListById(Number(id));
  if (!watchList) {
    next(new AppError("Watch list not found", 404));
  }
  res.status(200).json(watchList);
};

const getAllUserWatchListCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  const watchList = await getAllUserWatchList(Number(userId));
  if (!watchList) {
    next(new AppError("Watch list not found", 404));
  }
  res.status(200).json(watchList);
};

export {
  createWatchListCtrl,
  editWatchListCtrl,
  getWatchListByIdCtrl,
  getAllUserWatchListCtrl,
};
