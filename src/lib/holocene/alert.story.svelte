<script lang="ts">
  import Alert from './alert.svelte';

  export let Hst;
</script>

<Hst.Story>
  <Hst.Variant title="An Information Alert">
    <Alert intent="info" title="Alert Title" icon="info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
        exercitationem quia quibusdam excepturi rem saepe dolore quas, odit vero
        sed rerum necessitatibus minima nobis, ullam minus inventore voluptates
        itaque?
      </p>
    </Alert>
  </Hst.Variant>

  <Hst.Variant title="An Error Alert">
    <Alert icon="error" intent="error" title="Alert Title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
        exercitationem quia quibusdam excepturi rem saepe dolore quas, odit vero
        sed rerum necessitatibus minima nobis, ullam minus inventore voluptates
        itaque?
      </p>
    </Alert>
  </Hst.Variant>
  <Hst.Variant title="A Warning Alert">
    <Alert icon="warning" intent="warning" title="Alert Title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
        exercitationem quia quibusdam excepturi rem saepe dolore quas, odit vero
        sed rerum necessitatibus minima nobis, ullam minus inventore voluptates
        itaque?
      </p>
    </Alert>
  </Hst.Variant>
  <Hst.Variant title="A Success Alert">
    <Alert intent="success" title="Alert Title">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate
        exercitationem quia quibusdam excepturi rem saepe dolore quas, odit vero
        sed rerum necessitatibus minima nobis, ullam minus inventore voluptates
        itaque?
      </p>
    </Alert>
  </Hst.Variant>
  <Hst.Variant title="An Alert with just a Title">
    <Alert
      intent="error"
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
    />
  </Hst.Variant>
</Hst.Story>
