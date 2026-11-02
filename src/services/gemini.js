// export async function generateText(prompt) {
//   const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
//   const response = await fetch(
//     "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey,
//     {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
//     }
//   );
//   const data = await response.json();
//   return data.candidates?.[0]?.content?.parts?.[0]?.text;
// }


export async function generateText(prompt) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    console.error("Missing VITE_GROQ_API_KEY in environment variables.");
    throw new Error("Groq API Key is missing. Please check your .env file.");
  }

  // Clean prompt string to prevent empty request 400 errors
  const cleanPrompt = prompt ? prompt.trim() : "";
  if (!cleanPrompt) {
    throw new Error("Prompt text cannot be empty.");
  }

  // Active production model fallback chain
  const modelsToTry = [
    "llama-3.3-70b-versatile",
    "llama-3.1-8b-instant",
    "openai/gpt-oss-120b"
  ];

  let lastError = null;

  for (const modelId of modelsToTry) {
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey.trim()}`,
        },
        body: JSON.stringify({
          model: modelId,
          messages: [
            {
              role: "user",
              content: cleanPrompt,
            },
          ],
          temperature: 0.7,
          max_completion_tokens: 2048, // Constrains token limits cleanly
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.choices?.[0]?.message?.content || "";
      }

      const errorData = await response.json().catch(() => ({}));
      console.warn(`Groq Model ${modelId} failed (${response.status}):`, errorData);
      lastError = new Error(errorData?.error?.message || response.statusText);
    } catch (err) {
      console.warn(`Fetch attempt failed for model ${modelId}:`, err);
      lastError = err;
    }
  }

  throw lastError || new Error("Failed to generate text using available Groq models.");
}