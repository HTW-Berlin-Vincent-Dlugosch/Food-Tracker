<script>
  import Toggleinfo from './info/toggleinfo.svelte';
  import Logout from './login/logout.svelte';
</script>

<nav class="bg-orange-300 dark:bg-orange-500">
  <div class="container mx-auto grid grid-flow-col p-4 items-center justify-between">
    <div class="text-xl grid grid-flow-col gap-4 dark:text-black">
      <a href="/{new Date().toISOString().slice(0, 10)}">Home</a>
      <Toggleinfo />
    </div>
    <div class="gap-8 hidden items-center justify-end sm:flex">
      <Logout />
    </div>
    <div class="flex gap-4 sm:hidden"><Logout /></div>
  </div>
</nav>
