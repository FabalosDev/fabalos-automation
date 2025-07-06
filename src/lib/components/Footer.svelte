<script>
  import { Github, Linkedin } from 'lucide-svelte';
</script>

<footer class="text-soft text-sm bg-background border-t border-border mt-12">
  <div class="max-w-4xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

    <!-- 🔹 Contact & Tagline -->
    <div>
      <p>© 2025 <strong>Fabalos</strong>. Crafted with Tailwind, SvelteKit, and Fox Energy.</p>
      <p class="mt-1">
        <a href="mailto:hello@fabalos.com" class="hover:underline text-primary">hello@fabalos.com</a>
      </p>
    </div>

    <!-- 🔸 Social Links -->
    <div class="flex gap-4">
      <a href="https://github.com/FabalosDev" target="_blank" rel="noopener" aria-label="GitHub">
        <Github class="w-5 h-5 hover:text-primary transition" />
      </a>

      <a href="https://www.linkedin.com/in/fabalos" target="_blank" rel="noopener" aria-label="LinkedIn">
        <Linkedin class="w-5 h-5 hover:text-primary transition" />
      </a>
    </div>

  </div>
</footer>