<svelte:head>
  <title>Fabalos Automation — Systems Engineered for Clarity & Scale</title>
  <meta
    name="description"
    content="Automation Architect specializing in n8n, Make.com, Supabase, and GPT-driven systems. I build reliable, scalable automation workflows engineered with clean logic and precision."
  />
</svelte:head>

<script>
  import TechCarousel from '$lib/components/TechCarousel.svelte';
  import { showContactModal } from '$lib/stores/contact.js';
</script>

<div class="stack container max-w-7xl space-y-6">
  <section id="hero" class="section bg-background text-main">
    <div class="container grid-two items-center">

      <!-- LEFT COLUMN -->
      <div class="flex flex-col gap-6">

        <h1 class="font-heading text-primary text-4xl md:text-5xl leading-tight">
          Fabalos Automation
        </h1>

        <p class="text-soft text-xl md:text-2xl">
          Smart systems. Clean logic. Engineered for scale.
        </p>

        <p class="text-soft text-lg leading-relaxed max-w-xl mt-2">
          I build automation workflows using <strong>Make.com</strong>,
          <strong>n8n</strong>, and <strong>GPT</strong> to eliminate
          repetitive tasks, standardize operations, and engineer systems
          that support real business growth.
        </p>

        <ul class="text-soft space-y-1 text-base leading-relaxed mt-2">
          <li>• Reduce manual work and operational errors</li>
          <li>• Standardize processes with clean logic</li>
          <li>• Integrate tools across your workflow</li>
          <li>• Build systems that scale without breaking</li>
        </ul>

        <div class="flex flex-wrap gap-4 pt-2">
          <a href="/case-study" class="btn-primary">
            <span>Explore Case Studies</span>
          </a>

          <button class="btn-primary" on:click={() => showContactModal.set(true)}>
            <span>Get in Touch</span>
         </button>
        </div>

        <p class="powered-note">
          <span class="spark">⚡</span>
          Powered by an n8n automation engine.
        </p>
      </div>

    <!-- RIGHT COLUMN -->
      <div class="flex flex-col items-center gap-6">
        <img
          src="/logos/fabalos-logo-2k.png"
          alt="Fabalos Automation Logo"
          loading="lazy"
          class="max-w-[260px] md:max-w-[320px]"
        />

        <div class="w-full">
          <TechCarousel />
        </div>
      </div>
    </div>
  </section>
</div>

<div class="section-divider"></div>