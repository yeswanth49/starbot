import { groq } from "@ai-sdk/groq";
import { google } from "@ai-sdk/google"; // Import Google provider
import { openai } from "@ai-sdk/openai"
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";


export const model = customProvider({
  languageModels: {
    "llama-3.1-8b-instant": groq("llama-3.1-8b-instant"),
    "deepseek-r1-distill-llama-70b": wrapLanguageModel({
      middleware: extractReasoningMiddleware({
        tagName: "think",
      }),
      model: groq("deepseek-r1-distill-llama-70b"),
    }),
    "llama-3.3-70b-versatile": groq("llama-3.3-70b-versatile"),
    "llama-3.3-70b-specdec": groq("llama-3.3-70b-specdec"),
    "llama-3.2-1b-preview": groq("llama-3.2-1b-preview"),
    "gemini-2.5-pro-exp-03-25": google("gemini-2.5-pro-exp-03-25"), // Add Gemini 2.5 Pro
    "gpt-4o-mini": openai('gpt-4o-mini'),
  },
});

export type modelID = Parameters<(typeof model)["languageModel"]>["0"];