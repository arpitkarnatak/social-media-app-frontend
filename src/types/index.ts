export interface IUser {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
}

export interface IPost {
  id: string;
  authorUserId: string;
  title: string;
  body: string;
  author: IUser;
  createdAt: String,
}
