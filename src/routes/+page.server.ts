import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');  

export async function load() {
  const list = await pb.collection('churchs').getFullList();
  const churchs = list.map( item => ({ id: item.id, nickname: item.nickname }));
  return  { churchs: churchs };
}