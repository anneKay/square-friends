export type FriendsData = {
  id: number;
  name: string;
  username: string;
  bio: string;
  avatar: string;
}
export type FriendsDataResultType = {
  total_count: number;
  data: Array<FriendsData>;
}

// export type 