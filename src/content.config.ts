import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// ---------------------------------------------------------------------------
// MODELS — the single source of truth for model *facts*.
// Lives in src/data/models.yaml. Updating a model is a one-field edit here;
// never a rewrite of prose. Always bump `last_verified` when you touch a model.
// ---------------------------------------------------------------------------
const models = defineCollection({
  loader: file('src/data/models.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    provider: z.enum(['Claude', 'ChatGPT', 'Gemini']),
    vendor: z.string(), // e.g. "Anthropic"
    tier: z.enum(['flagship', 'balanced', 'fast', 'reasoning']),
    tagline: z.string(),
    context_window: z.string(),
    pricing: z
      .object({
        input: z.string(),
        output: z.string(),
        note: z.string().optional(),
      })
      .optional(),
    best_for: z.array(z.string()),
    prompting_quirks: z.array(
      z.object({
        title: z.string(),
        detail: z.string(),
      })
    ),
    example: z.object({
      label: z.string(),
      prompt: z.string(),
    }),
    davids_take: z.string().optional(),
    status: z.enum(['ga', 'rolling-out', 'restricted']).default('ga'),
    status_note: z.string().optional(),
    last_verified: z.string(), // ISO date, e.g. 2026-06-24
    source_url: z.string().url(),
    sort: z.number().default(0),
  }),
});

// ---------------------------------------------------------------------------
// PATTERNS — the product-work prompt library. One YAML file per pattern, each
// with model-tuned variants. Prompts live as plain strings (not MDX) so the
// {placeholder} markers inside them aren't parsed as expressions.
// ---------------------------------------------------------------------------
const patterns = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/patterns' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string().default('✦'),
    order: z.number().default(0),
    intro: z.string(),
    variants: z.array(
      z.object({
        model_name: z.string(),
        provider: z.enum(['Claude', 'ChatGPT', 'Gemini']),
        why: z.string(), // why this variant is leaner / more reliable here
        prompt: z.string(),
      })
    ),
    davids_take: z.string().optional(),
  }),
});

export const collections = { models, patterns };
