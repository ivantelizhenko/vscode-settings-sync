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
      const requestResult = await getAnswer("хочу купити телефон Samsung"); // тут також замість цього "рядка" вставляєш значення з input
      setValue(requestResult);
    }
    get();
  }, []); // тут додай те, що тобі потрібно в dependency array

  if (value) {
    // Сортую за ціною по дефолту
    // setResult((prev) => {
    //   return prev.toSorted((a, b) => (a.price > b.price ? 1 : -1));
    // });

    // Фільтрую по запиту
    if (value.type !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.type === value.type)
      );
    }
    if (value.madeCompany !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.madeCompany === value.madeCompany)
      );
    }
    if (value.model !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.model === value.model)
      );
    }
    if (value.rating !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => value.rating && item.rating >= value.rating)
      );
    }
    if (value.timeDeliveryDays !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.timeDeliveryDays <= value.timeDeliveryDays)
      );
    }
    if (value.numberOfReview !== null) {
      setResult((prev: Item[]) =>
        prev.filter((item) => item.numberOfReview >= value.numberOfReview)
      );
    }
  }

  return <div>App</div>;
}

export default App;
