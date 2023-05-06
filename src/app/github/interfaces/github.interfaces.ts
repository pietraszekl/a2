export interface Commit {
  commit: {
    message: string;
    committer: {
      date: string;
    };
  };
}
