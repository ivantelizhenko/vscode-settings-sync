import "./services/getAnswer";
import * as all from "../public/demoData";
import { getAnswer } from "./services/getAnswer";
import { useEffect, useState } from "react";

type Item = {
  type: string | null,
  madeCompany: string | null,
  model: string | null,
  price: number | null,
  rating: string | null,
  timeDeliveryDays: number | null,
  numberOfReview: number | null,
},;

function App() {
  const allItems:Item[] = Object.values(all).flat();
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

  if(value){

    // Сортую за ціною по дефолту
    // setResult((prev) => {
    //   return prev.toSorted((a, b) => (a.price > b.price ? 1 : -1));
    // });
    
    // Фільтрую по запиту
    setResult((prev:Item[]) => {
      if(value.type){
        const filterByType = prev.filter(item => item.type === value.type)
    }
  });
} 

  return <div>App</div>;
}

export default App;

console.log(1 <= 0);
