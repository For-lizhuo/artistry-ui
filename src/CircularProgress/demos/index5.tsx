import { CircularProgress } from 'artistry-ui';
import React, { useEffect } from 'react';

export default function CircularProgressDemo() {
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    function animation() {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1,
      );
      requestAnimationFrame(animation);
    }
    const id = requestAnimationFrame(animation);
    return () => {
      cancelAnimationFrame(id);
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
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      <CircularProgress variant="determinate" value={progress} />
    </div>
  );
}
