import  {useEffect, useState, useCallback} from 'react';

export const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e: { matches: any; }) => {
    if (e.matches) setTargetReached(true)
    else setTargetReached(false)
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true)

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return targetReached
}

export const useScroll = (startLabel: string): string => {
  const [label, setLabel] = useState<string>(startLabel);

  const handleScroll = (): void => {
    const position = window.scrollY;
    if (position > 0 && position < 2250) setLabel("why");
    if (position >= 2250 && position < 3100) setLabel("program");
    if (position >= 3100 && position < 4100) setLabel("people");
    if (position >= 4100 && position < 5100) setLabel("tickets");
    if (position >= 5100) setLabel("about");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return label
}

export const createArray = (length: number): number[] => {
  return new Array(length).fill(0).map((val, i) => +val + i);
};
