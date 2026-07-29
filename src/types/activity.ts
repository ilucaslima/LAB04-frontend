export type Activity = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  type: "status" | "comment" | "marked";
  action: string;
  title: string;
  status?: string;
  comment?: string;
  createdAt: string;
  project: string;
};
