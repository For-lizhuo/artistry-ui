import { LinearProgress } from 'artistry-ui';
import React, { useEffect } from 'react';

export default function LinearProgressDemo() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(0);
  useEffect(() => {
    const timer1 = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1,
      );
    }, 100);
    const timer2 = setInterval(() => {
      setBuffer((prevBuffer) =>
        prevBuffer >= 200 ? 0 : prevBuffer + 2,
      );
    }, 100);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);
  return (
    <>
      <div style={{ marginBottom: '4rem' }}>
        <LinearProgress variant="buffer" value={30} buffer={60} />
      </div>
      <div>
        <LinearProgress variant="buffer" value={progress} buffer={buffer} />
      </div>
    </>
  );
}
