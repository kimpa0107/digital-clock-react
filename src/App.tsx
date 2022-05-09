import { useEffect, useState } from 'react';
import Double from './components/Double';
import Split from './components/Split';

type ICurrentTime = [number, number, number];

function App() {
  const [h, m, s] = getCurrentTime();

  const [hour, setHour] = useState(h);
  const [minute, setMinute] = useState(m);
  const [second, setSecond] = useState(s);
  const [showSplit, setShowSplit] = useState(true);

  useEffect(() => {
    const interval1 = setInterval(() => {
      const [h, m, s] = getCurrentTime();
      setHour(h);
      setMinute(m);
      setSecond(s);
    }, 1000);

    const interval2 = setInterval(() => {
      setShowSplit(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="flex space-x-5 p-5">
      <Double value={hour} />
      <Split visible={showSplit} />
      <Double value={minute} />
      <Split visible={showSplit} />
      <Double value={second} />
    </div>
  );
}

export default App;

function getCurrentTime(): ICurrentTime {
  const d = new Date();
  return [d.getHours(), d.getMinutes(), d.getSeconds()];
}
