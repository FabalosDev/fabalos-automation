<svelte:head>
  <meta name="description" content="Fabalos Automation — Engineering modern automation using n8n, Make.com, GPT, and system-level workflow design." />
</svelte:head>

<script>
	import { Github, Linkedin } from 'lucide-svelte';
</script>

<footer id="links" class="bg-background border-border text-soft mt-12 border-t text-sm">
	<div
		class="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-8 text-center md:flex-row md:justify-between md:text-left"
	>

		<!-- 🔹 Brand + Contact -->
		<div class="space-y-2 text-left">
			<p>
				© 2025 <strong class="text-main">Fabalos</strong> — Built with Tailwind & SvelteKit.
			</p>

			<p class="footer-links">
				<span class="link-label">Links:</span>
				<a href="/projects" class="footer-a">📜 Full Project Timeline</a>
				<span class="divider">•</span>
				<a href="/blog" class="footer-a">📝 Blog</a>

			</p>

		</div>

		<!-- 🔸 Socials -->
		<div class="flex gap-5">
			<a
				href="https://github.com/FabalosDev"
				target="_blank"
				rel="noopener"
				aria-label="GitHub"
				class="hover:text-primary transition-colors"
			>
				<Github class="h-5 w-5" />
			</a>

			<a
				href="https://www.linkedin.com/in/fabalos"
				target="_blank"
				rel="noopener"
				aria-label="LinkedIn"
				class="hover:text-primary transition-colors"
			>
				<Linkedin class="h-5 w-5" />
			</a>
		</div>

	</div>
<div class="stack container space-y-6 pb-6">
		<p class="footer-powered text-center">
			<span class="spark">⚡</span>
			<span class="label">Powered by</span>
			<span class="engine">n8n Automation Engine</span>
			<span class="divider">•</span>
			<span class="by">Designed & Orchestrated by</span>
			<span class="brand">Fabalos Automation
			</span>

		</p>
	</div>
</footer>
