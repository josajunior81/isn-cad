import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const response = await prisma.disciple.findMany({
    include: {
      churchs: true
    }
  })
  return  { disciples: response.map(r => ({ id: Number(r.id), name: r.name, isLeader: r.isLeader ? "Sim" : "Não", isPastor: r.isPastor ? "Sim" : "Não", churchs: r.churchs.map(c => [c.nickname]) })) };
}) satisfies PageServerLoad;