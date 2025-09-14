"use server";

import { generateMedicinalHerbImages } from "@/ai/flows/generate-medicinal-herb-images";

export async function getHerbImages(herbName: string) {
  if (!herbName || herbName.trim().length < 3) {
    return { error: "Please enter a valid herb name (at least 3 characters)." };
  }
  try {
    const result = await generateMedicinalHerbImages({ herbName });
    if (!result.imageUrls || result.imageUrls.length === 0) {
      return { error: "AI failed to generate images. Please try a different name." };
    }
    return { data: result.imageUrls };
  } catch (e) {
    console.error("Error generating herb images:", e);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
