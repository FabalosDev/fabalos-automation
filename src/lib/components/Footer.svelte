<script>
	import { Github, Linkedin } from 'lucide-svelte';
</script>

<footer class="bg-background border-border text-soft mt-12 border-t text-sm">
	<div
		class="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-8 text-center md:flex-row md:justify-between md:text-left"
	>
		<!-- 🔹 Brand + Contact -->
		<div class="space-y-1">
			<p>
				© 2025 <strong class="text-main">Fabalos</strong>. Crafted with Tailwind, SvelteKit, and
				Fox Energy.
			</p>

			<a href="mailto:hello@fabalos.com" class="text-primary hover:underline">
				hello@fabalos.com
			</a>
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
</footer>
