import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const response = await prisma.church.findMany()
  return  { churchs: response };
}) satisfies PageServerLoad;