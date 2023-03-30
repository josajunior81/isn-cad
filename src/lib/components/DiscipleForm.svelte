<script lang="ts">
	import { enhance } from '$app/forms';
	import { Autocomplete, type AutocompleteOption } from '@skeletonlabs/skeleton';
	export let formData: any
  export let churchs: any

  const flavorOptions: AutocompleteOption[] = churchs
  
  let inputDemo = '';

  function onDemoSelection(event: any): void {
	  inputDemo = event.detail.label;
  }
</script>

<form method="POST" use:enhance>
	<div class="space-y-3">
		<label class="label">
			<span>Nome Completo</span>
			<input class="input" type="text" placeholder="Nome Completo" />
		</label>
		<label class="label">
			<span>Data de nascimento</span>
			<input class="input" type="text" placeholder="Data de nascimento" />
		</label>
		<label class="label">
			<span>Bloco</span>
			<select class="select">
				<option value="1">Beira Mar</option>
			</select>
		</label>
		<label class="label">
			<span>Igreja na casa</span>
			<!-- <select class="select">
				<option value="0">Selecione...</option>
        {#each churchs as church }
        <option value="{church.id}">{church.nickname}</option>
        {/each}
			</select> -->
      <input class="input" type="search" name="demo" bind:value={inputDemo} placeholder="Search..." />
      <Autocomplete bind:input={inputDemo} options={flavorOptions} on:selection={onDemoSelection} />
		</label>
		<label class="label">
			<span>Discipulador</span>
			<select class="select">
				<option value="1">Selecione...</option>
			</select>
		</label>
	</div>
</form>
