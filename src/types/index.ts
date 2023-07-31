export interface IUser {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  createdAt: string;
}

export interface IPost {
  id: string;
  authorUserId: string;
  comments: any[],
  title: string;
  body: string;
  author: IUser;
  createdAt: String,
}
