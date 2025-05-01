'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const nickname = 'snacksncode';

function mapRangeExponential(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
  exponent: number = 2
): number {
  const clampedValue = Math.min(Math.max(value, inputMin), inputMax);
  let normalizedValue = (clampedValue - inputMin) / (inputMax - inputMin);
  normalizedValue = 1 - Math.pow(normalizedValue, exponent);
  return outputMin + normalizedValue * (outputMax - outputMin);
}

type Coords = {
  x: number;
  y: number;
};

const useGlobalCoords = () => {
  const [coords, setCoords] = useState<Coords>();
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isTouching) {
        setCoords({ x: e.pageX, y: e.pageY });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setIsTouching(true);
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setCoords({ x: touch.pageX, y: touch.pageY });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setCoords({ x: touch.pageX, y: touch.pageY });
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      setCoords(undefined);
    };

    document.addEventListener('mousemove', handleMouseMove, { signal });
    document.addEventListener('touchstart', handleTouchStart, { signal });
    document.addEventListener('touchmove', handleTouchMove, { signal });
    document.addEventListener('touchend', handleTouchEnd, { signal });

    return () => abortController.abort();
  }, [isTouching]);

  return { coords };
};

const Letter = ({ char }: { char: string }) => {
  const { coords } = useGlobalCoords();
  const [position, setPosition] = useState<Coords>();
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const { x, y } = ref.current.getBoundingClientRect();
    setPosition({ x, y });
  }, []);

  const calculateStyles = () => {
    if (!coords || !position) return { fontWeight: 100, color: 'white' };

    const diffX = Math.abs(coords.x - position.x);
    const diffY = Math.abs(coords.y - position.y);
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);
    const halfWindowWidth = window.innerWidth / 4;

    const fontWeight = Math.round(mapRangeExponential(distance, 0, halfWindowWidth, 100, 900, 3));

    return { fontWeight };
  };

  return (
    <span style={calculateStyles()} ref={ref}>
      {char}
    </span>
  );
};

export const Nickname = () => {
  const chars = nickname.split('');

  return (
    <div className="flex min-h-[100svh] items-center justify-center font-mono text-[8vw]">
      {chars.map((char, index) => {
        return <Letter key={index} char={char} />;
      })}
    </div>
  );
};
