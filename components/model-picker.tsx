"use client";
import { modelID } from "@/ai/providers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ModelPickerProps {
  selectedModel: modelID;
  setSelectedModel: (model: modelID) => void;
}

const MODELS: Record<modelID, string> = {
  "llama-3.1-8b-instant": "A fast cheap model",
  "deepseek-r1-distill-llama-70b": "A reasoning model",
  "llama-3.3-70b-versatile": "A large model",
  "llama-3.3-70b-specdec": "A basic model",
  "llama-3.2-1b-preview": "basic",
  "gemini-2.5-pro-exp-03-25": "Google's advanced reasoning model", // Add Gemini 2.5 Pro
  "gpt-4o-mini": "gpt-4o-mini",
};

export const ModelPicker = ({
  selectedModel,
  setSelectedModel,
}: ModelPickerProps) => {
  return (
    <div className="absolute bottom-2 left-2 flex flex-col gap-2">
      <Select value={selectedModel} onValueChange={setSelectedModel}>
        <SelectTrigger className="">
          <SelectValue placeholder="Select a model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(MODELS).map(([modelId]) => (
              <SelectItem key={modelId} value={modelId}>
                {modelId}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};