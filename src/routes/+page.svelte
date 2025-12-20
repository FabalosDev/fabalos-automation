<svelte:head>
	<!-- 🌟 PAGE TITLE -->
	<title>Fabalos Automation — Smart Systems, Clean Logic, Real Results</title>

	<!-- 🌟 META DESCRIPTION -->
	<meta
		name="description"
		content="Automation Systems Architect specializing in n8n, Make.com, GPT workflows, backend logic, and business systems design. I automate complex processes to eliminate repetitive work and deliver scalable operational impact."
	/>

	<!-- 🌟 KEYWORDS -->
	<meta
		name="keywords"
		content="automation engineer, n8n expert, make.com specialist, GPT workflows, systems architect, backend automation, business automation, workflow engineer, SvelteKit portfolio"
	/>

	<!-- 🌟 CANONICAL URL -->
	<link rel="canonical" href="https://fabalos.com/" />

	<!-- 🌟 OPEN GRAPH -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fabalos.com/" />
	<meta property="og:title" content="Fabalos Automation — Smart Systems, Clean Logic, Real Results" />
	<meta
		property="og:description"
		content="I design and automate workflows using n8n, Make.com, and GPT — delivering clean logic, scalable systems, and real operational results."
	/>
	<meta property="og:image" content="https://fabalos.com/meta/fabalos-og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- 🌟 TWITTER CARD -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Fabalos Automation — Smart Systems, Clean Logic, Real Results" />
	<meta
		name="twitter:description"
		content="Automation Systems Architect specializing in n8n, Make.com, and AI-driven workflow automation."
	/>
	<meta name="twitter:image" content="https://fabalos.com/meta/fabalos-og-image.png" />

	<!-- 🌟 STRUCTURED DATA (JSON-LD) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Franklin Abalos",
			"alternateName": "Fabalos",
			"url": "https://fabalos.com",
			"jobTitle": "Automation Systems Architect",
			"sameAs": [
				"https://github.com/FabalosDev",
				"https://linkedin.com/in/frank-abalos"
			],
			"worksFor": {
				"@type": "Organization",
				"name": "Fabalos Automation"
			},
			"knowsAbout": [
				"n8n automation",
				"Make.com integrations",
				"GPT workflow automations",
				"backend systems design",
				"API orchestration",
				"AI-powered automation"
			]
		}
	</script>
</svelte:head>

<script lang="ts">
	// 📦 Component Imports
	import About from '$lib/components/About.svelte';
	import BrandsSection from '$lib/components/BrandsSection.svelte';
	import CaseStudyTeaser from '$lib/components/CaseStudyTeaser.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stack from '$lib/components/Stack.svelte';
</script>

<!-- 🧭 Global Layout -->
<Header />

<main>
	<!-- 🚀 Landing Sections -->
	<Hero />
	<About />
	<CaseStudyTeaser />
	<BrandsSection />
	<Stack />
	<CTA />
</main>

<Footer />