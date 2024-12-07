import { logger } from '../logger';
import type { Speaker } from '../../types';

export interface ProcessedBlock extends Speaker {
  originalIndexes: number[];
}

export function concatenateTextBlocks(speakers: Speaker[]): ProcessedBlock[] {
  if (!speakers?.length) {
    logger.warn('No speakers provided for text concatenation');
    return [];
  }

  logger.debug('Starting text block concatenation', { 
    blockCount: speakers.length 
  });

  const processedBlocks: ProcessedBlock[] = [];
  let currentBlock: ProcessedBlock | null = null;

  speakers.forEach((speaker, index) => {
    // Clean up text by removing extra whitespace
    const cleanText = speaker.text.trim();
    if (!cleanText) return;

    if (!currentBlock) {
      currentBlock = {
        ...speaker,
        text: cleanText,
        originalIndexes: [index]
      };
      return;
    }

    const timeDiff = speaker.timestamp[0] - currentBlock.timestamp[1];
    const shouldConcatenate = currentBlock.speaker === speaker.speaker && timeDiff < 2.0;

    if (shouldConcatenate) {
      // Add proper spacing between concatenated text
      const separator = currentBlock.text.endsWith('.') ? ' ' : 
                       currentBlock.text.endsWith(',') ? ' ' : 
                       ' ';
      
      currentBlock.text = `${currentBlock.text}${separator}${cleanText}`;
      currentBlock.timestamp[1] = speaker.timestamp[1];
      currentBlock.originalIndexes.push(index);
    } else {
      // Different speaker or too large time gap, create new block
      processedBlocks.push(currentBlock);
      currentBlock = {
        ...speaker,
        text: cleanText,
        originalIndexes: [index]
      };
    }
  });

  // Add the last block if exists
  if (currentBlock) {
    processedBlocks.push(currentBlock);
  }

  logger.debug('Text block concatenation completed', {
    originalBlocks: speakers.length,
    concatenatedBlocks: processedBlocks.length
  });

  return processedBlocks;
}