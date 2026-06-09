export type ViewState = 'home' | 'essays' | 'notes' | 'bookshelf' | 'talks' | 'about';

export interface TOCItem {
  id: string;
  title: string;
}

export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  tableOfContents?: TOCItem[];
  pullQuote?: string;
  sections: {
    id?: string;
    heading?: string;
    paragraphs: string[];
  }[];
  notes?: string[];
  references?: string[];
}

export interface FragmentNote {
  id: string;
  date: string;
  content: string;
  category: string;
  citation?: string;
}

export interface InfluenceBook {
  id: string;
  title: string;
  author: string;
  year: number | string;
  excerpt: string;
  review: string;
  color: string;
  textColor: string;
  borderColor?: string;
}

export interface SpeakingEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  location: string;
  description: string;
  status: 'upcoming' | 'past';
  topic: string;
}
