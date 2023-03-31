import prisma from '$lib/prisma';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
  const response = await prisma.church.findMany()
  return  { churchs : response.map(r => ({value: Number(r.id), label: r.nickname, keywords: r.nickname.split(" e ")})) };
}) satisfies PageServerLoad;
 
export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    return {...data }
  }
} satisfies Actions;