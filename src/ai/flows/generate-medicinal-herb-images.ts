// 'use server';

/**
 * @fileOverview Generates images of medicinal herbs in various settings.
 *
 * - generateMedicinalHerbImages - A function that generates three images of medicinal herbs.
 * - GenerateMedicinalHerbImagesInput - The input type for the generateMedicinalHerbImages function.
 * - GenerateMedicinalHerbImagesOutput - The return type for the generateMedicinalHerbImages function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMedicinalHerbImagesInputSchema = z.object({
  herbName: z.string().describe('The name of the medicinal herb.'),
});
export type GenerateMedicinalHerbImagesInput = z.infer<typeof GenerateMedicinalHerbImagesInputSchema>;

const GenerateMedicinalHerbImagesOutputSchema = z.object({
  imageUrls: z.array(z.string()).describe('An array of image URLs generated for the medicinal herb.'),
});
export type GenerateMedicinalHerbImagesOutput = z.infer<typeof GenerateMedicinalHerbImagesOutputSchema>;

export async function generateMedicinalHerbImages(input: GenerateMedicinalHerbImagesInput): Promise<GenerateMedicinalHerbImagesOutput> {
  return generateMedicinalHerbImagesFlow(input);
}

const generateMedicinalHerbImagesFlow = ai.defineFlow(
  {
    name: 'generateMedicinalHerbImagesFlow',
    inputSchema: GenerateMedicinalHerbImagesInputSchema,
    outputSchema: GenerateMedicinalHerbImagesOutputSchema,
  },
  async input => {
    const imageUrls: string[] = [];
    for (let i = 0; i < 3; i++) {
      const prompt = `Generate a high-quality image of ${input.herbName} in a ${getLocation(i)} setting.`;
      const {media} = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: prompt,
      });
      if (media?.url) {
        imageUrls.push(media.url);
      }
    }
    return {imageUrls};
  }
);

function getLocation(index: number): string {
  switch (index) {
    case 0:
      return 'herb garden';
    case 1:
      return 'laboratory';
    case 2:
      return 'natural environment';
    default:
      return 'natural environment';
  }
}
