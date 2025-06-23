<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import CaseStudyTeaser from '$lib/components/CaseStudyTeaser.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import BrandsSection from '$lib/components/BrandsSection.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main>
  <Hero />
  <About />
  <CaseStudyTeaser />  
  <BrandsSection />
  <Stack /> 
  <CTA />
</main>
<Footer />