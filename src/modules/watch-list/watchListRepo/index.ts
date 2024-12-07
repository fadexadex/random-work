import { PrismaClient } from "@prisma/client";
import { IWatchListCreate } from "utils/types";
import { IMovie } from "utils/types";

class WatchListRepo {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  createWatchList = async (data: IWatchListCreate) => {
    return await this.prisma.watchList.create({
      data,
      include: { movie: true },
    });
  };

  editWatchList = async (id: number, data: IWatchListCreate) => {
    return await this.prisma.watchList.update({
      where: { id },
      data,
    });
  };

  getWatchListById = async (id: number) => {
    return await this.prisma.watchList.findUnique({
      where: { id },
      include: { movie: true },
    });
  };

  getAllUserWatchList = async (userId: number) => {
    return await this.prisma.watchList.findMany({
      where: { userId },
      include: { movie: true },
    });
  };

  addMovieToWatchList = async (watchListId: number, movieDetails: IMovie) => {
    return await this.prisma.watchList.update({
      where: { id: watchListId },
      data: {
        movie: {
          create: movieDetails,
        },
      },
      include: { movie: true },
    });
  };
}



export default WatchListRepo;
