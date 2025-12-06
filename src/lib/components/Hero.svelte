<script>
	import TechCarousel from '$lib/components/TechCarousel.svelte';
</script>

<section id="hero" class="section bg-background text-main">
	<div class="container grid items-center gap-12 md:grid-cols-2">
		<!-- Brand Intro -->
		<div class="space-y-6">
			<h1 class="font-heading text-4xl font-bold leading-tight md:text-6xl">Fabalos Automation</h1>

			<h2 class="text-soft text-xl md:text-2xl">Smart Systems. Clean Logic. Real Results.</h2>

			<p class="text-soft text-lg leading-relaxed">
				I design and build automated workflows using <strong>Make.com</strong>,
				<strong>n8n</strong>, and <strong>GPT</strong> — removing repetitive work and creating systems
				that scale with your operations.
			</p>

			<!-- Value points -->
			<ul class="text-soft space-y-2 text-sm md:text-base">
				<li>• Reduce manual work and errors</li>
				<li>• Standardize processes with clean automation logic</li>
				<li>• Integrate tools across your entire workflow</li>
				<li>• Build scalable automation architectures</li>
			</ul>

			<!-- CTAs -->
			<div class="flex flex-wrap gap-4 pt-4">
				<a href="/case-study" class="btn-solid">
					<span>Explore Case Studies</span>
				</a>
				<a href="mailto:hello@fabalos.com" class="btn-primary">
					<span>Contact for a Build Session</span>
				</a>
			</div>
		</div>

		<!-- Logo + Carousel Column -->
		<div class="flex flex-col items-center justify-center gap-6">
			<!-- Logo -->
			<img
				src="/logos/fabalos-logo-2k.png"
				alt="Fabalos Automation Logo"
				class="h-auto w-full max-w-[320px] md:max-w-[400px]"
			/>

			<!-- Carousel -->
			<TechCarousel />
		</div>
	</div>
</section>
