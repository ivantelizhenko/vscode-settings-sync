import "./services/getAnswer";
import * as all from "../public/demoData";
import { getAnswer } from "./services/getAnswer";
import { useEffect, useState } from "react";

type Item = {
  type: string;
  madeCompany: string;
  model: string;
  price: number;
  rating: string;
  timeDeliveryDays: number;
  numberOfReview: number;
};

function App() {
  const allItems: Item[] = Object.values(all).flat();
  const [result, setResult] = useState<Item[]>(allItems);
  const [value, setValue] = useState<Item | null>(null);

  // Отримую дані про запит
  useEffect(() => {
    async function get() {
      const requestResult = await getAnswer("хочу купити смартфон Samsung"); // тут також замість цього "рядка" вставляєш значення з input
      console.log(requestResult);
      setValue(requestResult);
    }
    get();
  }, []); // тут додай те, що тобі потрібно в dependency array

  useEffect(() => {
    if (value && value.madeCompany !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.madeCompany === value.madeCompany)
      );
    }
    if (value && value.model !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.model === value.model)
      );
    }
    if (value && value.rating !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => value.rating && item.rating >= value.rating)
      );
    }
    if (value && value.timeDeliveryDays !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.timeDeliveryDays <= value.timeDeliveryDays)
      );
    }
    if (value && value.numberOfReview !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.numberOfReview >= value.numberOfReview)
      );
    }
    if (value && value.price !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.price <= value.price)
      );
    }
    if (value && value.type !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.type === value.type)
      );
    }
  }, [value]);

  console.log(result);

  return <div>App</div>;
}

export default App;
