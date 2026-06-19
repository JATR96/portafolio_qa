import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  useInView,
} from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({
  end,
  duration = 1500,
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps): React.JSX.Element => {

  const ref =
    useRef(null);

  const isInView =
    useInView(ref, {
      once: true,
    });

  const [count, setCount] =
    useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let start = 0;

    const increment =
      end /
      (duration / 16);

    const timer =
      window.setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);

          clearInterval(
            timer,
          );

          return;
        }

        setCount(start);
      }, 16);

    return () =>
      clearInterval(timer);
  }, [
    end,
    duration,
    isInView,
  ]);

  return (
    <span ref={ref}>
      {count.toFixed(
        decimals,
      )}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;