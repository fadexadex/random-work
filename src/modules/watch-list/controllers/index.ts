import { Request, Response, NextFunction } from "express";
import {
  createWatchList,
  editWatchList,
  getWatchListById,
  getAllUserWatchList,
  addMovieToWatchList,
} from "../services";
import { AppError } from "../../../utils/middlewares/errorHandler";

const createWatchListCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newWatchList = await createWatchList(req.body);
    if (!newWatchList) {
      return next(new AppError("Failed to create watch list", 500));
    }
    res.status(201).json(newWatchList);
  } catch (error) {
    next(error);
  }
};

const editWatchListCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updatedWatchList = await editWatchList(Number(id), req.body);
    if (!updatedWatchList) {
      return next(new AppError("Failed to update watch list", 500));
    }
    res.status(200).json(updatedWatchList);
  } catch (error) {
    next(error);
  }
};

const getWatchListByIdCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const watchList = await getWatchListById(Number(id));
    if (!watchList) {
      return next(new AppError("Watch list not found", 404));
    }
    res.status(200).json(watchList);
  } catch (error) {
    next(error);
  }
};

const getAllUserWatchListCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const watchList = await getAllUserWatchList(Number(userId));
    if (!watchList) {
      return next(new AppError("Watch list not found", 404));
    }
    res.status(200).json(watchList);
  } catch (error) {
    next(error);
  }
};

const addMovieToWatchListCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { watchListId } = req.params;

    if (!watchListId || !req.body) {
      return next(new AppError("Invalid Request, ensure watchlistId and movies details are present", 400));
    }
    const updatedWatchList = await addMovieToWatchList(
      Number(watchListId),
      req.body
    );
    if (!updatedWatchList) {
      return next(new AppError("Failed to add movie to watch list", 500));
    }
    res.status(200).json(updatedWatchList);
  } catch (error) {
    next(error);
  }
};

export {
  createWatchListCtrl,
  editWatchListCtrl,
  getWatchListByIdCtrl,
  getAllUserWatchListCtrl,
  addMovieToWatchListCtrl,
};
