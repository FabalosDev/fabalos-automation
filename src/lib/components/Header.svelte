<svelte:head>
  <meta
    name="description"
    content="Home · About · Case Studies · Tech Stack · Contact"
  />
</svelte:head>

<script>
  import { slide } from 'svelte/transition';

  let isOpen = false;

  // SECTION-ONLY NAVIGATION
  let links = [
    { label: 'About', href: '#about' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Tech Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' }
  ];
</script>

<header
  class="bg-background/90 text-main border-border sticky top-0 z-50 w-full border-b backdrop-blur-sm"
>
  <div class="container flex items-center justify-between px-6 py-4">

    <!-- Logo -->
    <a href="/" aria-label="Fabalos Home" class="flex items-center gap-2">
      <img src="/logos/fabalos-logo.png" alt="Fabalos Automation Logo" class="h-12 w-auto" />
    </a>

    <!-- Desktop Nav -->
    <nav class="font-heading text-main hidden gap-8 md:flex">
      {#each links as { label, href }}
        <div class="group relative inline-block">
          <a href={href} class="hover:text-primary transition-colors duration-300">
            <span class="relative z-10">{label}</span>
          </a>
          <span
            class="bg-primary absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </div>
      {/each}
    </nav>

    <!-- Mobile Toggle -->
    <button
      class="focus:outline-none md:hidden"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle navigation"
    >
      <svg class="text-primary h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if isOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <nav
      in:slide={{ duration: 250 }}
      out:slide={{ duration: 200 }}
      class="bg-background text-main border-border space-y-4 border-t px-6 pb-6 pt-2 md:hidden"
    >
      {#each links as { label, href }}
        <a
          href={href}
          class="border-border hover:text-primary block border-b py-2 transition-colors"
          on:click={() => (isOpen = false)}
        >
          {label}
        </a>
      {/each}
    </nav>
  {/if}
</header>
