<script lang="ts">
  import Skeleton from './index.svelte';
  import SkeletonTable from './table.svelte';

  export let Hst;
</script>

<Hst.Story>
  <Hst.Variant title="A Default Skeleton Loader">
    <Skeleton />
  </Hst.Variant>

  <Hst.Variant title="A Card Skeleton Loader">
    <Skeleton class="h-24 w-44 rounded-sm" />
  </Hst.Variant>

  <Hst.Variant title="A Table Skeleton Loader">
    <SkeletonTable />
  </Hst.Variant>
</Hst.Story>
