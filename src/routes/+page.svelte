<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData
</script>

<div class="flex flex-row justify-center">
  <div class="card p-4 basis-1/2">
      <form method="POST" action="?/login" use:enhance>
        <div class="space-y-3">
          <label class="label">
            <span>e-mail</span>
            <input name="email" class="input" type="text" placeholder="e-mail" />
          </label>
          <label class="label">
            <span>Senha</span>
            <input name="password" class="input" type="password" placeholder="Senha" />
          </label>
          <div class="flex flex-row justify-evenly">
            <button type="submit" class="btn variant-filled-primary">Entrar</button>
            <button type="submit" formaction="?/register" class="btn variant-filled-secondary">Registrar</button>
          </div>
        </div>
      </form>
  </div>
</div>

