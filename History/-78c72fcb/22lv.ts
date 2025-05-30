import OpenAI from "openai";
import { CHATGPT_TOKEN } from "./constants";

const baseQuery =
  "Створи мені на основі запиту, ось такий обєкт: { type: тут повинен бути тип приладу ,madeCompany: компанія, яка виробляє цей продукт,model: модель продукту,price: ціна,rating: рейтинг по пятибальній шкалі ,timeDeliveryDays: скільки днів доставик,numberOfReview: кількість відгуків,}. Якщо немає відповіді пиши null. І повертай мені тільки цей обєкт у форматі об'єкта json, а не рядка . Також потрібно щоб всі слова були англійською або null. Ось запит:";

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
          content: baseQuery + " " + query,
        },
      ],
      store: true,
    });

    if (!completion.choices[0].message.content)
      throw new Error("Some problem with get data");

    const result = await JSON.parse(
      completion.choices[0].message.content
        .replaceAll("`", "")
        .replaceAll("json", "")
    );
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
