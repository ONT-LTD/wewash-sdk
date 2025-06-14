export function truncateText(text: string) {
  if (typeof text !== 'string' || text.length <= 4) {
    return text;
  }

  const firstTwo = text.slice(0, 2);
  const lastTwo = text.slice(-2);

  return `${firstTwo}***${lastTwo}`;
}

export function truncateTextWithEmail(text: string) {
  if (typeof text !== 'string' || text.length <= 4) {
    return text;
  }

  const firstTwo = text.slice(0, 2);
  const lastEight = text.slice(-8);

  return `${firstTwo}***${lastEight}`;
}

export function truncateTextSubtitle(text: string, size: number) {
  if (typeof text !== 'string' || text?.length <= size) {
    return text;
  }

  const firstTwo = text.slice(0, size);

  return `${firstTwo}...`;
}

export function truncateTextLast4(text: string, size: number) {
  if (typeof text !== 'string' || text.length <= size) {
    return text;
  }

  const firstTwo = text.slice(0, size);

  return `...${firstTwo}`;
}
