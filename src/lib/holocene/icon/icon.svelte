<script lang="ts">
  import { icons, type IconName } from './paths';

  export let name: IconName;
  export let width = 24;
  export let height = 24;

  $: icon = icons[name];
</script>

{#if icon}
  <svelte:component this={icon} {width} {height} class={$$props.class} />
{/if}
