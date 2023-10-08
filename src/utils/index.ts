export function debounce(func: (...args: any[]) => any, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      return func.apply(this, args);
    }, delay);
  };
}

export function throttle(func: (...args: any) => any, wait: number) {
  let previous = 0;
  return function (...args: any[]) {
    let now = new Date().getTime();
    if (now - previous > wait) {
      previous = now;
      return func.apply(this, args);
    }
  };
}

export function multiplyCssLength(
  cssLength: string,
  multiplier: number,
): string {
  const match = cssLength.match(/^([\d.]+)([a-zA-Z%]*)$/);
  if (!match) {
    throw new Error('Invalid CSS length format');
  }
  const value = parseFloat(match[1]);
  const unit = match[2];
  if (isNaN(value)) {
    throw new Error('Invalid numeric value in CSS length');
  }
  const multipliedValue = value * multiplier;
  return `${multipliedValue}${unit}`;
}

export function mousePositionInElement(e: React.MouseEvent<HTMLDivElement>) {
  const element = e.target;
  const rect = (element as any).getBoundingClientRect();
  const elementWidth = rect.width;
  const clickX = e.clientX - rect.left;
  return clickX < elementWidth / 2 ? ('left' as const) : ('right' as const);
}

export function ByteToOthers(byte: number): string {
  if (byte < 1024) {
    return byte + 'B';
  } else if (byte < 1024 * 1024 * 1024) {
    return Math.round(byte / 1024) + 'KB';
  } else if (byte < 1024 * 1024 * 1024 * 1024 * 1024) {
    return Math.round(byte / (1024 * 1024)) + 'MB';
  }
  return Math.round(byte / (1024 * 1024 * 1024)) + 'GB';
}
