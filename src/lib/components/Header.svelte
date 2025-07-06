<script>
  import { slide } from 'svelte/transition';

  let isOpen = false;

  let links = [
    { label: 'About', href: '#about' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Tech Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' }
  ];
</script>

<!-- 🧭 Sticky Navigation Header -->
<header class="w-full sticky top-0 z-50 border-b border-starlight bg-background/90 backdrop-blur-sm text-text-main">
  <div class="container flex items-center justify-between py-4 px-6">

    <!-- 🔰 Logo -->
    <a href="/" aria-label="Fabalos Home" class="flex items-center gap-2">
      <img
        src="/logos/fabalos-logo.png"
        alt="Fabalos Automation Logo"
        class="h-12 w-auto"
      />
    </a>

    <!-- 🌐 Desktop Navigation -->
    <nav class="hidden md:flex gap-6 font-medium text-smooth font-body">
      {#each links as { label, href }}
        <div class="group relative inline-block">
          <a
            href={href}
            class="font-heading text-smooth hover:text-primary transition-colors duration-300"
          >
            <span class="relative z-10">{label}</span>
          </a>
          <span
            class="absolute left-0 bottom-0 h-[2px] w-full bg-red-500 rounded-full scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"
          ></span>
        </div>
      {/each}
    </nav>

    <!-- 📱 Hamburger Icon -->
    <button
      class="md:hidden focus:outline-none"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle navigation"
    >
      <svg
        class="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {#if isOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- 📱 Slide-In Mobile Menu -->
  {#if isOpen}
    <nav
      in:slide={{ duration: 250 }}
      out:slide={{ duration: 200 }}
      class="md:hidden px-6 pb-6 pt-2 bg-background text-smooth space-y-4 ease"
    >
      {#each links as { label, href }}
        <a
          href={href}
          class="block py-2 border-b border-starlight hover:text-primary transition"
          on:click={() => (isOpen = false)}
        >
          {label}
        </a>
      {/each}
    </nav>
  {/if}
</header>