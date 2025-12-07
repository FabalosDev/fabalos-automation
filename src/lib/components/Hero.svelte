<script>
	import TechCarousel from '$lib/components/TechCarousel.svelte';
</script>

<section id="hero" class="bg-background text-main overflow-hidden py-16">
	<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- 2-Column Grid -->
		<div class="grid items-center gap-12 md:grid-cols-2">
			<!-- LEFT COLUMN (TEXT) -->
			<div class="space-y-6">
				<h1 class="font-heading text-4xl font-bold leading-tight md:text-6xl">
					Fabalos Automation
				</h1>

				<h2 class="text-soft text-xl md:text-2xl">Smart Systems. Clean Logic. Real Results.</h2>

				<p class="text-soft break-words text-lg leading-relaxed">
					I design and build automated workflows using <strong>Make.com</strong>,
					<strong>n8n</strong>, and <strong>GPT</strong> — eliminating repetitive tasks, standardizing
					processes, and building scalable systems that grow with your operations.
				</p>

				<ul class="text-soft space-y-2 text-sm md:text-base">
					<li>• Reduce manual work and errors</li>
					<li>• Standardize processes with clean automation logic</li>
					<li>• Integrate tools across your entire workflow</li>
					<li>• Build scalable automation architectures</li>
				</ul>

				<div class="flex flex-wrap gap-4 pt-4">
					<a href="/case-study" class="btn-solid">Explore Case Studies</a>
					<a href="mailto:hello@fabalos.com" class="btn-primary">Contact for a Build Session</a>
				</div>
			</div>

			<!-- RIGHT COLUMN (LOGO + CAROUSEL) -->
			<div class="flex max-w-full flex-col items-center justify-center space-y-4 overflow-x-hidden">
				<!-- Logo -->
				<img
					src="/logos/fabalos-logo-2k.png"
					alt="Fabalos Automation Logo"
					class="h-auto w-full max-w-[320px] md:max-w-[400px]"
				/>

				<!-- Carousel stays inside right column -->
				<div class="w-full overflow-hidden">
					<TechCarousel />
				</div>
			</div>
		</div>
	</div>
</section>
