import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { mistral } from '@ai-sdk/mistral';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";

export type modelID =
  | "gemini-2.5-pro-exp-03-25"
  | "gemini-2.0-flash"
  | "mistral-small-2503"
  | "gpt-4o-mini";

export const model = customProvider({
  languageModels: {
    "gemini-2.5-pro-exp-03-25": google("gemini-2.5-pro-exp-03-25"),
    "gemini-2.0-flash": google('gemini-2.0-flash'),
    "mistral-small-2503": mistral('mistral-small-2503'),
    "gpt-4o-mini": openai('gpt-4o-mini'),
  },
});