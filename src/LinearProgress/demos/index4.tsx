import { LinearProgress } from 'artistry-ui';
import React, { useEffect } from 'react';

export default function LinearProgressDemo() {
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1,
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress variant="determinate" value={25} />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress variant="determinate" value={50} />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress variant="determinate" value={75} />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress variant="determinate" value={100} />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    </>
  );
}
