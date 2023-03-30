<script lang="ts">
  import { enhance } from '$app/forms';
  export let formData: any
  
  // const handleSubmit = async (e) => {
  //   console.log(e)
	// };
</script>

<!-- <form on:submit|preventDefault={handleSubmit}> -->
<form method="POST" use:enhance>
  <div class="space-y-3">
    <label class="label">
      <span>Como é chamada</span>
      <input id="nickname" name="nickname" class="input" type="text" placeholder="Como é chamada a igreja na casa" bind:value={formData.nickname} />
    </label>
    <label class="label">
      <span>Dia do encontro</span>
      <select id="meeting_day" name="meeting_day" class="select" bind:value={formData.meeting_day}>
        <option value="">Selecione...</option>
        <option value="domingo">Domingo</option>
        <option value="segunda">Segunda</option>
        <option value="terça">Terça</option>
        <option value="quarta">Quarta</option>
        <option value="quinta">Quinta</option>
        <option value="sexta">Sexta</option>
        <option value="sábado">Sábado</option>
      </select>
    </label>  
    <label class="label">
      <span>Horário do encontro</span>
      <select id="meeting_time" name="meeting_time" class="select" bind:value={formData.meeting_time}>
        <option value="">Selecione...</option>
        <option value="manhã">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>
    </label>
    <label class="label">
      <span>Líder</span>
      <select class="select" value={formData.leader}>
        <option value="">Selecione...</option>
      </select>
    </label>  
  </div>

  <button type="submit" class="btn variant-filled">Save</button>
</form>