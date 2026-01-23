import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

type SignDTO = {
  number: string
  name: string
};

export default defineEventHandler(async (event) => {
  const category = getRouterParam(event, 'category');

  if (!category)
    throw createError({ status: 400, statusText: 'Missing category' });

  const dataPath = join(process.cwd(), 'server', 'data', `${category}.json`);
  const isAvailable = existsSync(dataPath);

  if (!isAvailable)
    throw createError({ status: 400, statusText: 'No data for provided category' });

  const raw = await readFile(dataPath, 'utf-8');
  const dto = JSON.parse(raw) as SignDTO[];

  const cards: Sign[] = dto.map((c: SignDTO) => ({
    ...c,
    category: category as SignCategory,
    imageUrl: `/signs/${category}/${c.number}.svg`,
  }));

  return {
    category,
    cards,
  };
});
