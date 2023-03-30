import prisma from '$lib/prisma';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const church = await prisma.church.findUnique({
    where: { id: +params.id }
  });
  return  { nickname: church.nickname, meeting_day: church.meeting_day, meeting_time: church.meeting_time };
}) satisfies PageServerLoad;
 
export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    return {...data }
  }
} satisfies Actions;