<script>
  import '@demorepo/ui';

  import { onMount } from 'svelte';

  let url;
  let imageUrl;
  let title;

  onMount(async () => {
    const response = await fetch("http://127.0.0.1:9999/api");
    const data = await response.json();
    url = data.url;
    imageUrl = data.imageUrl;
    title = data.title;
  })

</script>

<main>
  <div>
    <a href={url} target="_blank"> 
      <img src={imageUrl} class="logo" alt={`${title} logo`} />
    </a>
  </div>
  <h1>Vite + Svelte + SitePen</h1>

  <div class="card">
    <demorepo-counter/>
  </div>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
