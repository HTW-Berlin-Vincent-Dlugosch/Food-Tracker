<script>
  import { goto } from '$app/navigation';

  goto(`/${new Date().toISOString().slice(0, 10)}`);
</script>

<svelte:head>
  <title>Food Tracker Homepage</title>
</svelte:head>
