export interface Commit {
  html_url: string;
  sha: string;
  commit: {
    message: string;
    committer: {
      name: string;
      date: string;
    };
  };
}
