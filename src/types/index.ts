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


export interface IComment {
  id: string,
  authorUserId: string,
  author: IUser
  postId: string,
  replyText: string,
  parentCommentId?: string,
  replies: IComment[],
  createdAt: string
}