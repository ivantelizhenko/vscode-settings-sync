import OpenAI from "openai";
import { CHATGPT_TOKEN } from "./constants";

const baseQuery =
  "Створи мені на основі запиту, ось такий обєкт: { madeCompany: компанія, яка виробляє цей продукт,model: модель продукту,price: ціна,rating: рейтинг по пятибальній шкалі ,timeDeliveryDays: скільки днів доставик,numberOfReview: кількість відгуків,}. Якщо немає відповіді пиши null. Ось запит";
// const baseQuery =
//   "Створи з цього запиту обʼєкт формату {name: найди потенційне імʼя обʼєкта , price: найди потенційне ціну обʼєкта, model: найди потенційне модель обʼєкта, shop: найди потенційний магазин де він продається, madeCompany: найди компанію яка виготовляє цей об'єкт}. Ти можеш брати інформацію тільки з запиту. Якщо щось не можеш знайти, просто дай відповідь що недостатньо данних. Ось запит:";

const openai = new OpenAI({
  apiKey: CHATGPT_TOKEN,
  dangerouslyAllowBrowser: true,
});

export async function getAnswer(query: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },

        {
          role: "user",
          content: query,
        },
      ],
      store: true,
    });

    if (!completion) throw new Error("Some problem with get data");

    return completion.choices[0].message.content;
  } catch (err) {
    console.error(err);
  }
}
console.log(await getAnswer(baseQuery + " " + "Я хочу купити телефон"));
