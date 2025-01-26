export interface WhoToFollowProps {
  image: string;
  username: string;
  fullname: string;
  followStatus: boolean;
}

export interface TweetPostProps {
  profileImage: string;
  username: string;
  fullname: string;
  createdAt: string;
  content?: string;
  contentImage?: string;
  commentCount: number;
  like: boolean;
  likeCount: number;
  bookmark: boolean;
  repost: boolean;
  repostCount: number;
}

export interface PostNotifProps {
  profileImage: string;
  username: string;
  fullname: string;
  reply: string;
  replyId: number;
  createdAt: string;
  content?: string;
  contentImage?: string;
  commentCount: number;
  like: boolean;
  likeCount: number;
  bookmark: boolean;
  repost: boolean;
  repostCount: number;
}

export interface LikeNotifProps {
  profileImage: string;
  fullname: string;
  content: string;
}
