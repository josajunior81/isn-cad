import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ locals: {supabase}}) => {
  const { error } = await supabase.auth.signOut()
  console.log(error)
  throw redirect(303, '/')
}