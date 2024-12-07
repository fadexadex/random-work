import WatchListRepo from "../watchListRepo";
import { IMovie, IWatchListCreate } from "utils/types";

const watchListRepo = new WatchListRepo();

const createWatchList = async (data: IWatchListCreate) => {
  return await watchListRepo.createWatchList(data);
};

const editWatchList = async (id: number, data: IWatchListCreate) => {
  return await watchListRepo.editWatchList(id, data);
};

const getWatchListById = async (id: number) => {
  return await watchListRepo.getWatchListById(id);
};

const getAllUserWatchList = async (userId: number) => {
  return await watchListRepo.getAllUserWatchList(userId);
};

const addMovieToWatchList = async (watchListId: number, movieDetails: IMovie) => {
  return await watchListRepo.addMovieToWatchList(watchListId, movieDetails);
};

export {
  createWatchList,
  editWatchList,
  getWatchListById,
  getAllUserWatchList,
  addMovieToWatchList,
};
