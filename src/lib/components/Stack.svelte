<!-- ============================================
     ENTERPRISE CAPABILITIES SECTION
     Clean • Professional • Automation Agency
   ============================================ -->

<svelte:head>
  <meta name="description" content="Explore the automation capabilities engineered to reduce operational load, eliminate repetitive tasks, and enable scalable business systems." />
</svelte:head>

<script>
  import {
    Workflow,
    Activity,
    GitBranch,
    Repeat,
    Layers,
    ServerCog
  } from 'lucide-svelte';
</script>

<section id="stack" class="section bg-background text-main scroll-mt-20">
  <div class="container max-w-7xl space-y-10">

    <!-- Header -->
    <div class="center-text">
      <h2 class="font-heading text-primary text-3xl md:text-4xl">
        What I Build
      </h2>
      <p class="text-soft text-lg max-w-2xl mx-auto">
        Automation systems engineered for clarity, reliability, and operational scale.
      </p>
    </div>

    <!-- GRID of Capabilities -->
    <div class="grid-two md:grid-cols-3 gap-8">

      <!-- Card 1 -->
      <div class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md card-hover">

        <Workflow class="text-primary mb-4 mx-auto" size="36" stroke-width="1.5" />
        <h3 class="font-heading text-primary text-xl mb-2 text-center">Workflow Automation</h3>
        <p class="text-soft text-sm leading-relaxed text-center">
          Build structured workflows that eliminate repetitive tasks and improve operational flow.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md card-hover">

        <GitBranch class="text-primary mb-4 mx-auto" size="36" stroke-width="1.5" />
        <h3 class="font-heading text-primary text-xl mb-2 text-center">Process Orchestration</h3>
        <p class="text-soft text-sm leading-relaxed text-center">
          Multi-step automation logic integrating several tools under a unified workflow engine.
        </p>
      </div>

      <!-- Card 3 -->

      <div class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md card-hover">

        <Activity class="text-primary mb-4 mx-auto" size="36" stroke-width="1.5" />
        <h3 class="font-heading text-primary text-xl mb-2 text-center">Operational Intelligence</h3>
        <p class="text-soft text-sm leading-relaxed text-center">
          Systems that surface insights automatically — reporting, monitoring, alerts, and analytics.
        </p>
      </div>

      <!-- Card 4 -->

      <div class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md card-hover">

        <Layers class="text-primary mb-4 mx-auto" size="36" stroke-width="1.5" />
        <h3 class="font-heading text-primary text-xl mb-2 text-center">Data Automation</h3>
        <p class="text-soft text-sm leading-relaxed text-center">
          Structured pipelines for processing, enriching, and syncing data across systems.
        </p>
      </div>

      <!-- Card 5 -->

      <div class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md card-hover">
        <ServerCog class="text-primary mb-4 mx-auto" size="36" stroke-width="1.5" />
        <h3 class="font-heading text-primary text-xl mb-2 text-center">System Integration</h3>
        <p class="text-soft text-sm leading-relaxed text-center">
          Connect applications through APIs, webhooks, and secure Automation-as-Infrastructure.
        </p>
      </div>

      <!-- Card 6 -->
      <div class="bg-surface border-border rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md card-hover">

        <Repeat class="text-primary mb-4 mx-auto" size="36" stroke-width="1.5" />
        <h3 class="font-heading text-primary text-xl mb-2 text-center">Scaling & Reliability</h3>
        <p class="text-soft text-sm leading-relaxed text-center">
          Design automation architectures that scale cleanly and operate without breaking.
        </p>
      </div>

    </div>
  </div>
</section>

<div class="section-divider"></div>

