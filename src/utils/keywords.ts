import { ProcessedLink } from '../types/graph';

interface KeywordCount {
  keyword: string;
  count: number;
}

export const extractKeywords = (links: ProcessedLink[]): KeywordCount[] => {
  const keywordCounts = new Map<string, number>();
  
  links.forEach(link => {
    link.keywords.forEach(keyword => {
      keywordCounts.set(keyword, (keywordCounts.get(keyword) || 0) + 1);
    });
  });
  
  return Array.from(keywordCounts.entries())
    .map(([keyword, count]) => ({ keyword, count }))
    .sort((a, b) => b.count - a.count);
};