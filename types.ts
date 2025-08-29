
export interface ShortLink {
  id: string;
  originalUrl: string;
  shortCode: string;
  createdAt: string;
}

// FIX: Define missing enums and types for application state and data models.
export enum AppView {
  Videos = 'videos',
  Summarizer = 'summarizer',
}

export enum SourcePlatform {
  YouTube = 'YouTube',
  TikTok = 'TikTok',
}

export interface TrendingContent {
  id: string;
  source: SourcePlatform;
  title: string;
  thumbnailUrl: string;
  content: string; // transcript or description
  videoUrl: string;
}

export type Language = 'english' | 'spanish' | 'french';

export type OutputType = 'summary' | 'bullets' | 'social';
