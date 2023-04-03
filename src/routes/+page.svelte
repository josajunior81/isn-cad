<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import type { PageData } from './$types';
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';

	export let data: PageData;
  $: localization = () => {
    if (view == "sign_in") {
      return {
        variables: {
          sign_up: {
            email_label: "Endereço de email",
            password_label: "Senha",
            email_input_placeholder: "Digite seu email",
            password_input_placeholder: "Crie sua senha",
            button_label: "Cadastrar",
            loading_button_label: "Cadastrando ...",
            social_provider_text: "Cadastrar com {{provider}}",
            link_text: "Não está cadastrado? Cadastrar",
            confirmation_text: "Acesse o link de confirmação no seu email"
          },
        }
      }
    } else {
      return {
        variables: {
          sign_in: {
            email_label: "Endereço de email",
            password_label: "Senha",
            email_input_placeholder: "Digite seu email",
            password_input_placeholder: "Crie sua senha",
            button_label: "Cadastrar",
            loading_button_label: "Cadastrando ...",
            social_provider_text: "Entrar com {{provider}}",
            link_text: "Já tem uma conta? Entrar",
          },
        }
      }      
    }
  }

 $: view = "sign_in"

 let tabSet: number = 0;

</script>

<TabGroup justify="justify-center">
	<Tab bind:group={view} name="tab1" value={"sign_in"}>Login</Tab>
	<Tab bind:group={view} name="tab2" value={"sign_up"}>Cadastro</Tab>
	<svelte:fragment slot="panel">
    <div class="flex flex-row justify-center">
      <div class="card p-4 basis-1/2">
          <Auth
            
            supabaseClient={data.supabase}
            view={view}
            redirectTo={`${data.url}/logging-in?redirect=/`}
            showLinks={false}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            localization={localization()}
          />
      </div>
    </div>
	</svelte:fragment>
</TabGroup>

