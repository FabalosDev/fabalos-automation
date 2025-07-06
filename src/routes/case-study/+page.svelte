<script>
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Case Studies | Fabalos Automation</title>
  <meta name="description" content="Explore real-world automation solutions — from Make.com routers to GPT-powered tagging flows." />
  <meta property="og:title" content="Case Studies | Fabalos" />
  <meta property="og:description" content="Breakdowns of intelligent workflows that simplify business ops. Built with n8n, Make.com, and GPT." />
  <meta property="og:image" content="/og-case-study.png" />
  <meta name="keywords" content="Make.com, GPT, automation case study, product tagging, system design, Fabalos" />
</svelte:head>

<section class="section bg-background text-main">
  <div class="container stack text-left">
    <!-- 🧠 Section Intro -->
    <h1 class="text-4xl font-heading text-primary mb-4 text-center">Case Study: Make.com Product Tagging</h1>
    <p class="text-lg max-w-2xl mx-auto text-center" style="color: rgba(255, 255, 255, 0.9);">
      A real-world automation flow built with purpose — using <strong>Make.com</strong>, <strong>GPT</strong>, and <strong>Google Sheets</strong>.
    </p>

    <!-- 📌 Case Study -->
    <div class="mt-12 border border-primary rounded-xl p-6 bg-surface" style="color: rgba(255, 255, 255, 0.9);">
      <h2 class="text-2xl font-heading text-primary mb-2">Make.com Product Tagging System</h2>
      <p class="leading-relaxed">
        A robust metadata tagging pipeline using Google Sheets + GPT via Make.com.  
        Enabled parallel tagging, intelligent fallback logic, and auto-sorting.  
        Scalable and designed to remove bottlenecks in high-volume content workflows.
      </p>
      <img src="/images/case-tagging1.png" alt="Tagging Case Study Screenshot 1" class="mt-6 rounded shadow" />
      <img src="/images/case-tagging2.png" alt="Tagging Case Study Screenshot 2" class="mt-6 rounded shadow" />
    </div>

    <!-- 🔙 Back -->
    <div class="mt-12 text-center">
      <a href="/" class="text-primary hover:underline font-medium">← Back to Home</a>
    </div>
  </div>
</section>

<Footer />