export type PageId =
  | 'page1_question'
  | 'page2_choices'
  | 'page3_song'
  | 'page5_birthday'
  | 'page6_future';

export interface SongStanza {
  id: number;
  lines: string[];
  meaning: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  durationSeconds: number;
  description?: string;
}

export interface FutureSceneData {
  id: 'study' | 'career' | 'family';
  title: string;
  subtitle?: string;
  description: string;
  caption: string;
}

export interface FutureLetterData {
  date: string;
  salutation: string;
  paragraphs: string[];
  signOff: string;
  postScript?: string;
}

export interface BearState {
  pose: 'idle' | 'happy' | 'hug' | 'kiss' | 'shy' | 'study' | 'celebrate' | 'sleeping' | 'holding_hands' | 'comforting' | 'apologizing';
  blushing?: boolean;
  eyeState?: 'open' | 'closed' | 'wink' | 'sleepy' | 'hearts';
}
