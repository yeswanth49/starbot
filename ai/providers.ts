import { groq } from "@ai-sdk/groq";
import { google } from "@ai-sdk/google"; // Import Google provider
import { openai } from "@ai-sdk/openai";
import { mistral } from '@ai-sdk/mistral';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";


export const model = customProvider({
  languageModels: {
    "deepseek-r1-distill-llama-70b": wrapLanguageModel({
      middleware: extractReasoningMiddleware({
        tagName: "think",
      }),
      model: groq("deepseek-r1-distill-llama-70b"),
    }),
    "llama-3.3-70b-versatile": groq("llama-3.3-70b-versatile"),
    "gemini-2.5-pro-exp-03-25": google("gemini-2.5-pro-exp-03-25"), // Add Gemini 2.5 Pro
    "gpt-4o-mini": openai('gpt-4o-mini'),
    "gemini-2.0-flash": google('gemini-2.0-flash'),
    "mistral-small-2503": mistral('mistral-small-2503'),

  },
});

export type modelID = Parameters<(typeof model)["languageModel"]>["0"];