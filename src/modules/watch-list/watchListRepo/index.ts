import { PrismaClient } from "@prisma/client";
import { IWatchListCreate } from "utils/types";

class WatchListRepo {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  createWatchList = async (data: IWatchListCreate) => {
    return await this.prisma.watchList.create({ data });
  };

  editWatchList = async (id: number, data: IWatchListCreate) => {
    return await this.prisma.watchList.update({
      where: { id },
      data,
    });
  };

  getWatchListById = async (id: number) => {
    return await this.prisma.watchList.findUnique({ where: { id } });
  };

  getAllUserWatchList = async (userId: number) => {
    return await this.prisma.watchList.findMany({
      where: { userId },
    });
  };

  //movies

  addMovieToWatchList = async (watchListId: number, movieId: number) => {
    return await this.prisma.watchList.update({
      where: { id: watchListId },
      data: {
        movies: {
          connect: {
            id: movieId,
          },
        },
      },
    });
  };
}

export default WatchListRepo;
