<script lang="ts">
  import Autocomplete from './autocomplete.svelte';

  export let Hst;
  let value = '';
</script>

<Hst.Story>
  <Hst.Variant title="An Autocomplete Input">
    <Autocomplete
      id="autocomplete"
      label="Example"
      {value}
      icon="search"
      options={['Avacado', 'Bacon', 'Cheese', 'Donuts', 'Eggs']}
      onOptionClick={(v) => (value = v)}
    />
  </Hst.Variant>
</Hst.Story>
