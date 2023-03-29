import PocketBase from 'pocketbase';

import type { PageServerLoad, Actions } from './$types';

const pb = new PocketBase('http://127.0.0.1:8090');  

export const load = (async ({ params }) => {
  const church = await pb.collection('churchs').getOne(params.id);
  return  { nickname: church.nickname, meeting_day: church.meeting_day, meeting_time: church.meeting_time };
}) satisfies PageServerLoad;
 
export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    return {...data }
  }
} satisfies Actions;