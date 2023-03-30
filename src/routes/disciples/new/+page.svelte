<script lang="ts">
    import DiscipleForm from "$lib/components/DiscipleForm.svelte";
	import type { ActionData, PageData } from "./$types";

    export let data: PageData
    export let form: ActionData
</script>

<DiscipleForm formData={form} churchs={data.churchs} />