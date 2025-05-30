import "./services/getAnswer";
import * as all from "../public/demoData";
import { getAnswer } from "./services/getAnswer";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import List from "./components/List/List";

export type Item = {
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
  const [input, setInput] = useState<string>("");

  // Отримую дані про запит
  useEffect(() => {
    async function get() {
      const requestResult = await getAnswer(input);
      setValue(requestResult);
    }
    get();
  }, [input]);

  const handleSearch = async () => {
    const requestResult = await getAnswer(input);
    if (requestResult) {
      setResult(requestResult);
    } else {
      setResult([]);
    }
  };

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

  return (
    <div className="flex flex-col items-center justify-between h-full gap-[50px] pb-[60px]">
      <Header />
      <h1 className="font-semibold xl:text-[28px] sm:text-[16px] md:text-[18px] text-center">
        I'm your shopping assistant! What can I find for you?
      </h1>
      {input.length > 0 && result.length > 0 ? (
        <List items={[]} />
      ) : input.length > 0 ? (
        <p>Sorry, product(s) not found</p>
      ) : null}
      <Input onSearch={handleSearch} input={input} setInput={setInput} />
    </div>
  );
}

export default App;
