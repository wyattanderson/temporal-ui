<script lang="ts">
  import { page } from '$app/stores';

  import CodeBlock from '$lib/holocene/code-block.svelte';
  import Loading from '$holocene/loading.svelte';
  import { fetchRawEvents } from '$lib/services/events-service';
  import { decodeURIForSvelte } from '$lib/utilities/encode-uri';
  import PageTitle from '$lib/holocene/page-title.svelte';

  const { namespace, workflow: workflowId, run: runId } = $page.params;

  const events = fetchRawEvents({
    namespace: decodeURIForSvelte(namespace),
    workflowId: decodeURIForSvelte(workflowId),
    runId: decodeURIForSvelte(runId),
    sort: 'ascending',
  });
</script>

<PageTitle title={`Workflow History | ${workflowId}`} url={$page.url.href} />
{#await events}
  <Loading />
{:then events}
  <CodeBlock content={events} data-cy="event-history-json" />
{/await}
