import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: NextRequest) {
  try {
    console.log("API route called");

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key not configured on server" },
        { status: 500 }
      );
    }

    // Initialize Google Generative AI
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const { message } = await request.json();
    console.log("Received message:", !!message);

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const systemPrompt = `You are a book recommendation assistant. Provide concise book recommendations in a simple list format.

Guidelines:
- Recommend exactly 3-4 books per response
- Format as a simple numbered list
- Include only: Book Title by Author Name
- NO descriptions or explanations
- Focus on popular, well-known books
- Mix classic and contemporary titles
- If user asks about non-book topics, politely redirect to book recommendations
- IMPORTANT: Each book must be on a separate line with proper line breaks

Example format:
1. Dune by Frank Herbert
2. The Martian by Andy Weir
3. Foundation by Isaac Asimov`;

    console.log("About to call Google AI API...");
    const result = await model.generateContent(`${systemPrompt}\n\nUser request: ${message}`);
    console.log("Google AI API call completed");

    const response = result.response.text();

    if (!response) {
      console.error("Google AI returned no content:", result);
      return NextResponse.json({ error: "No response from Google AI" }, { status: 502 });
    }

    return NextResponse.json({ message: response, success: true });
  } catch (err) {
    console.error("Google AI API error:", err);
    console.error("Error details:", {
      message: err instanceof Error ? err.message : 'Unknown error',
      stack: err instanceof Error ? err.stack : undefined,
      name: err instanceof Error ? err.name : undefined
    });
    return NextResponse.json({ 
      error: "Failed to get book recommendations",
      details: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 });
  }
}
