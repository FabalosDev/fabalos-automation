<svelte:head>
  <meta
    name="description"
    content="Ready to streamline your operations? Build automation systems engineered for scale, clarity, and reliability."
  />
</svelte:head>

<script>
  import { showContactModal } from '$lib/stores/contact.js';
</script>

<section id="contact" class="section bg-surface text-main scroll-mt-20">
  <div class="stack container center-text max-w-3xl">

    <!-- Title -->
    <h2 class="font-heading text-primary text-3xl md:text-4xl">
      Let’s Build Your Automation Flow
    </h2>

    <!-- Subtitle -->
    <p class="text-soft text-lg leading-relaxed max-w-2xl mx-auto">
      Whether you're optimizing internal operations or designing a scalable automation framework,
      I can help architect systems that are robust, maintainable, and built for long-term growth.
    </p>

    <!-- CTA Button -->
    <button
      class="btn-primary mx-auto mt-4"
      on:click={() => showContactModal.set(true)}
    >
      <span>Get in Touch</span>
    </button>

  </div>
</section>
