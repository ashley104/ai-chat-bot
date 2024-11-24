import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: "You are a highschool teacher. You are talking to a student who need help with assignment. You want give them profesional, detail feedback and appropriate grade according to marking criteria.",
    messages,
  });

  return result.toAIStreamResponse();
}