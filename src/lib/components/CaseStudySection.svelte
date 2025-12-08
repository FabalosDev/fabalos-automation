<svelte:head>
  <meta name="description" content="Explore the automation frameworks powering real business operations — from AI content workflows to API orchestration and data automation." />
</svelte:head>

<section class="section bg-background text-main">
	<div class="stack center-text container">
		<!-- 🔹 Section Header -->
		<h2 class="font-heading text-primary text-3xl">Automation Case Studies</h2>
		<p class="text-soft mx-auto max-w-2xl text-lg">
			A behind-the-scenes look at how I build intelligent automation systems that save time, reduce
			errors, and scale with grace.
		</p>

		<!-- 🧠 Render Case Studies -->
		<div class="mt-12 space-y-12">
			{#each caseStudies as study}
				<div class="bg-surface border-border space-y-4 rounded-xl border p-8 text-left shadow-sm">
					<h3 class="font-heading text-primary text-2xl">🧠 {study.title}</h3>

					<p class="text-soft leading-relaxed">{study.summary}</p>

					<ul class="text-soft list-inside list-disc space-y-1">
						{#each study.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>

					<p class="text-soft text-sm italic">{study.feedback}</p>

					<a
						href={study.ctaHref}
						target="_blank"
						rel="noopener"
						class="btn-primary mt-4 inline-block"
					>
						<span>{study.ctaText}</span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
