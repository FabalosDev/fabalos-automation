<script lang="ts">
  import { page } from '$app/stores';

</script>

<svelte:head>
  <title>404 — Signal Interrupted · Fabalos Automation</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="section bg-background text-main">
  <div class="container center-text stack">

    <h1 class="font-heading text-primary text-5xl md:text-6xl leading-tight">
      Signal Interrupted
    </h1>

    <div class="relative flex justify-center overflow-hidden items-center py-24">
      <img
        src="/art/fabalos-automation-404.png"
        alt="Fabalos Automation — Signal Interrupted"
        loading="lazy"
        class="w-full max-w-4xl md:max-w-5xl opacity-90
           drop-shadow-[0_0_40px_rgba(255,122,26,0.25)]
           animate-fade-in-up"
        />
    </div>

    <p class="text-soft max-w-xl mx-auto text-lg leading-relaxed">
      This node does not exist in the current system map.
      The automation core is operational, but the requested path
      has been deprecated, relocated, or erased from the timeline.
    </p>

    <div class="flex justify-center gap-4 mt-8">
      <a href="/" class="btn-primary">
        <span>Return to Base</span>
      </a>

      <a href="/case-study" class="btn-primary">
        <span>View Projects</span>
      </a>
    </div>

    <div class="mt-10 text-xs font-mono text-soft opacity-60 leading-relaxed">
      <p>&gt; Status: STABLE</p>
      <p>&gt; Automation Engine: ONLINE</p>
      <p>&gt; Node Resolution: FAILED</p>
      <p>&gt; Recommendation: REROUTE</p>
    </div>

    <p class="text-soft text-xs opacity-50 mt-8">
      Fabalos Automation · Systems don’t break — they evolve.
    </p>

  </div>
</section>
