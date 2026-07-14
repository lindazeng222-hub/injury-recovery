export interface RecoveryPhase {
  title: string;
  duration: string;
  description: string;
}

export interface Video {
  title: string;
  youtube_id: string;
}

export interface Injury {
  slug: string;
  name: string;
  body_part: string;
  severity: string;
  recovery_time: string;
  tagline: string;
  description: string;
  thumbnail: string;
  phases: RecoveryPhase[];
  videos: Video[];
  tips: string[];
  subreddit: string;
}

export interface CommunityLink {
  name: string;
  subreddit: string;
  description: string;
  url: string;
  relatedInjuries: string[];
}
