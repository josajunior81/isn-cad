<script lang="ts">
  import { Paginator, Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

  export let data: PageData

  const tableHeaders: string[] = ['id', 'name', 'é líder?', 'é pastor?', 'Igreja na casa']

  let page = {
    offset: 0,
    limit: 10,
    size: data.disciples.length,
    amounts: [5,10,20,50],
  };

  $: paginatedSource = data.disciples.slice(
    page.offset * page.limit,             // start
    page.offset * page.limit + page.limit // end
  );

  function goTo(event: CustomEvent) {
    goto(`/disciples/${event.detail[0]}`)
  }
</script>

<div class="pb-5">
  <a href="/disciples/new" class="btn variant-filled" data-sveltekit-preload-data="hover">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>        
  </a>
</div>
<Table source={{ head: tableHeaders, body: tableMapperValues(paginatedSource, ['id', 'name', 'isLeader', 'isPastor', 'churchs']) }}  interactive={true} on:selected={goTo}/>
<Paginator bind:settings={page}></Paginator>
