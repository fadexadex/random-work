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

// interface AddMovieToWatchListInput {
//   watchListId Int
//   api_id      Int
//   title       String
//   overview    String
//   posterPath  String
//   releaseDate DateTime
//   voteAverage Float
// }

export interface IMovie {
  api_id: number;
  title: string;
  overview?: string;
  posterPath?: string;
  releaseDate?: string;
  voteAverage?: number;
}


declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
