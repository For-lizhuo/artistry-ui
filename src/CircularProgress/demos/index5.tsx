import { CircularProgress } from 'artistry-ui';
import React, { useEffect } from 'react';

export default function CircularProgressDemo() {
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <CircularProgress variant='determinate' value={25} />
      <CircularProgress variant='determinate' value={50} />
      <CircularProgress variant='determinate' value={75} />
      <CircularProgress variant='determinate' value={100} />
      <CircularProgress variant='determinate' value={progress} />
    </div>
  );
}
