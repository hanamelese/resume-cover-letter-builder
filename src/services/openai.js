import axios from "axios";

export async function askAI(question) {
  const res = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: question }]
  }, {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}` }
  });
  return res.data.choices[0].message.content;
}
