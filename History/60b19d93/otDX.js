export function useTime() {

  const [time, setTime] = useState(formatTime(new Date()));


  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);


  return { time };
}
