export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IInitailState {
  posts: Posts[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | any;
}
