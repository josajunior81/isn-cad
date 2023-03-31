<script lang="ts">
  import { Paginator, Table, tableMapperValues } from '@skeletonlabs/skeleton';
  import type { TableSource } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

  export let data: PageData

  let page = {
    offset: 0,
    limit: 10,
    size: data.churchs.length,
    amounts: [5,10,20,50],
  };

  $: paginatedSource = data.churchs.slice(
    page.offset * page.limit,             // start
    page.offset * page.limit + page.limit // end
  );

  function goTo(event: CustomEvent) {
    goto(`/churchs/${event.detail[0]}`)
  }
</script>

<div class="pb-5">
  <button type="button" class="btn variant-filled">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  </button>
</div>
  <Table source={{ head: ['id', 'nickname'], body: tableMapperValues(paginatedSource, ['id', 'nickname']) }}  interactive={true} on:selected={goTo}/>
  <Paginator bind:settings={page}></Paginator>