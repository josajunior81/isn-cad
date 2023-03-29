<script lang="ts">
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
  export let data

  const tableSimple: TableSource = {
    head: ['id', 'nickname'],
    body: tableMapperValues(data.churchs, ['id', 'nickname']),
  };

  function goTo(event: CustomEvent) {
    goto(`/churchs/${event.detail[0]}`)
  }
</script>

<button type="button" class="btn variant-filled">Novo</button>

<Table source={tableSimple} interactive={true} on:selected={goTo}/>