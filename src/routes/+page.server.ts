// src/routes/+page.server.ts
import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const session = await getSession();

    // if the user is already logged in return them to the account page
	if (session) {
		throw redirect(303, '/disciples');
	}

	return { url: url.origin };
};

export const actions: Actions = {
  login: async ({ request, locals: {supabase} }) => {
    const data = Object.fromEntries(await request.formData());
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email as string,
      password: data.password as string
    })
    if (error) {
      console.log(error, data)
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: 'Invalid credentials.',
          values: {
            email: data.email as string
          }
        });
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email: data.email as string
        }
      });
    }

    throw redirect(303, '/disciples/new')    
  },
  register: async ({locals: {supabase}, request }) => {
    const data = Object.fromEntries(await request.formData());
    // const newUser = await prisma.user.create({
    //   data: {
    //     email: data.email as string,
    //     password: data.password as string
    //   }
    // })
    const { error } = await supabase.auth.signUp({
      email: data.email as string,
      password: data.password as string
    })
  }

} satisfies Actions;