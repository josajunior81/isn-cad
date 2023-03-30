<script lang="ts">
  import ChurchForm from "$lib/components/ChurchForm.svelte";
  import type { PageData, ActionData } from './$types';

  export let data: PageData;
  export let form: ActionData;
</script>

<ChurchForm formData={{...data, ...form}}/>