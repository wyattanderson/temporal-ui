<script lang="ts">
  import { namespaceSelectorOpen } from '$lib/stores/nav-open';
  import { viewFeature } from '$lib/stores/new-feature-tags';
  import Icon from '$holocene/icon/icon.svelte';
  import Tooltip from '$holocene/tooltip.svelte';

  function toggleNamespaceSelector() {
    $namespaceSelectorOpen = !$namespaceSelectorOpen;
    viewFeature('namespaceSelector');
  }
</script>

<Tooltip text="Select a namespace">
  <button
    class="relative"
    on:click={toggleNamespaceSelector}
    aria-label="Namespace Select"
    data-cy="namespace-select-button"
  >
    <Icon
      name="namespace-switcher"
      width={32}
      height={32}
      class="mx-2 inline cursor-pointer rounded-full border border-gray-900 shadow-md transition-all hover:scale-105"
    />
  </button>
</Tooltip>
