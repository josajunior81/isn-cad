<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
  import { AppShell, AppBar, LightSwitch, storePopup, TabGroup, Tab, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { writable, type Writable } from 'svelte/store';
  import { page } from '$app/stores';
  import logo from "$lib/assets/favicon.png"

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  let railValue: Writable<number> = writable(0);

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
        <a href="/churchs">
          <img src={logo} width="50" height="50" />
        </a>         
			</svelte:fragment>
      <strong class="text-xl uppercase">Discípulos Beira Mar</strong>
			<svelte:fragment slot="trail">
        <LightSwitch />
      </svelte:fragment>
		</AppBar>
	</svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <AppRail selected={railValue}>
      <AppRailTile tag="a" href="/churchs" class="{"/churchs" === $page.url.pathname ? '!bg-primary-500' : ''}" label="Igrejas nas casas" value={0}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>        
      </AppRailTile>
      <AppRailTile tag="a" href="/disciples" class="{"/disciples" === $page.url.pathname ? '!bg-primary-500' : ''}" label="Discípulos" value={1}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>        
      </AppRailTile>
    </AppRail>
  </svelte:fragment>
  <div class="px-10 py-10">
    <slot />
  </div>
</AppShell>
