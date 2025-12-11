<svelte:head>
  <title>Projects · Lifetime Work Archive · Fabalos Automation</title>

  <meta
    name="description"
    content="A comprehensive archive of automation systems, engineering builds, software experiments, and long-term projects across the Fabaverse. Explore the full evolution of Fabalos Automation — from engineering foundations to advanced workflow orchestration."
  />

  <meta property="og:title" content="Projects · Lifetime Work Archive" />

  <meta
    property="og:description"
    content="A structured collection of lifetime projects, automation frameworks, technical builds, and system experiments from the Fabalos ecosystem."
  />

  <meta
    property="og:image"
    content="/og-projects.png"
  />

  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<script>
  // RESTARTED fresh sections + cards
  export let sections = [
    {
      title: "Automation & AI (Current Era)",
      color: "blue",
      cards: [
        {
          icon: "📰",
          title: "Editorial Content Pipeline",
          summary:
            "Automated system parsing hundreds of news stories daily using n8n + scraping + AI cleanup.",
          tags: "n8n • AI Automation • Scraping • Data Structuring"
        },
        {
          icon: "🛒",
          title: "Shopify Product Tagging Automation",
          summary:
            "NLP-powered automation that categorizes products and assigns metadata using Make.com + Shopify API.",
          tags: "Make.com • Shopify API • AI Tagging"
        },
        {
          icon: "🎨",
          title: "Branding Image Automation",
          summary:
            "Automatic Bannerbear + Cloudinary pipeline that generates branded image assets.",
          tags: "API Automation • Image Processing"
        },
        {
          icon: "📊",
          title: "Editorial Dashboard",
          summary:
            "React + Remix dashboard for reviewing parsed stories, editor tools, and content regeneration.",
          tags: "React • Typescript • UI Engineering"
        },
        {
          icon: "🌐",
          title: "Webflow Homepage Automation",
          summary:
            "Automated Webflow CMS + Page API updates for dynamic homepage rendering.",
          tags: "Webflow API • CMS Automation"
        },
        {
          icon: "🔍",
          title: "Mini-RAG System",
          summary:
            "Lightweight retrieval system using embeddings → chunking → querying.",
          tags: "Pinecone • Embeddings • Retrieval"
        },
        {
          icon: "📱",
          title: "Social Media Automation",
          summary:
            "AI-driven content rewriting, batching, and scheduling via n8n + smart timing logic.",
          tags: "n8n • Scheduling • Generative AI"
        }
      ]
    },

    {
      title: "Freelance & Operations (Support Era)",
      color: "purple",
      cards: [
        { icon: "📧", title: "Email Management Automation" },
        { icon: "🔎", title: "Data Research & Lead Generation" },
        { icon: "🗂️", title: "Portfolio Setup for Clients" },
        { icon: "♻️", title: "Content Repurposing Engine" },
        { icon: "📝", title: "WordPress Optimization Projects" },
        { icon: "☁️", title: "Cloudflare Deployment for Clients" },
        { icon: "🧰", title: "Technical Troubleshooting Tasks" }
      ]
    },

    {
      title: "Entrepreneurship Era (Purple Furball)",
      color: "orange",
      cards: [
        { icon: "🐾", title: "QR-Based Pet ID System" },
        { icon: "🐶", title: "The Purple Furball Website" },
        { icon: "📋", title: "Clinical Record System (Zoho CRM)" },
        { icon: "💳", title: "POS + Operational Systems" },
        { icon: "📸", title: "Social Media Branding" }
      ]
    },

    {
      title: "Industrial Automation (Festo Era)",
      color: "yellow",
      cards: [
        { icon: "🛠️", title: "Servo-Based PCB Casing Machine" },
        { icon: "🌬️", title: "Vacuum Leak Tester" },
        { icon: "🎛️", title: "Pneumatic Transfer Systems" },
        { icon: "⚙️", title: "Tin Punch Automation" },
        { icon: "📘", title: "Industrial Documentation & Manuals" }
      ]
    },

    {
      title: "College Engineering Projects",
      color: "green",
      cards: [
        { icon: "🤖", title: "Autonomous Line-Following Robot" },
        { icon: "🦾", title: "Robotic Arm Gripper" },
        { icon: "🔌", title: "Custom Microcontroller PCB" },
        { icon: "🔋", title: "Kinetic Resonance Energy Harvester" }
      ]
    },

    {
      title: "Fabaverse Personal Projects (Lore Era)",
      color: "sky",
      cards: [
        { icon: "⚡", title: "Fabalos Automation (SvelteKit)" },
        { icon: "🌌", title: "Fabaverse.net" },
        { icon: "📝", title: "WordPress Blog" },
        { icon: "🧠", title: "Notion OS" },
        { icon: "🧩", title: "n8n Self-Hosted Cluster" },
        { icon: "🚀", title: "Cloudflare Worker Deployments" },
        { icon: "🦊", title: "FoxOps Sandbox" },
        { icon: "📂", title: "FabalosDev GitHub System" },
        { icon: "🖼️", title: "FabaMeta" },
        { icon: "📅", title: "FabaHabit" },
        { icon: "🔥", title: "Foxther Brand Identity" },
        { icon: "🛍️", title: "Fabazon" },
        { icon: "🌙", title: "Astral Travel Notes" },
        { icon: "📷", title: "Lightroom Portfolio" },
        { icon: "🔄", title: "Monthly Upkeep Ritual" },
        { icon: "🧊", title: "Mental Overflow Buffer" },
        { icon: "⭐", title: "FabaMerge Game Concept" },
        { icon: "💤", title: "FoxServer (Paused Project)" },
        { icon: "🎨", title: "Tailwind v4 Design System" }
      ]
    }
  ];
</script>

<!-- 🔥 FOXTHER TITLE BLOCK -->
<div class="gallery-title">
  <h1 class="title">🚀 Project Gallery</h1>
  <p class="subtitle">
    A chronological evolution of my work — from automation engineering to the Fabaverse.
  </p>
</div>

<!-- WRAP THE WHOLE PAGE CONTENT -->
<div class="container px-4 md:px-6 lg:px-60 py-12">

  <section class="gallery">
    {#each sections as section}
      <div class="section-block">
        <h2 class="section-title">{section.title}</h2>

        <div class="grid">
          {#each section.cards as card}
            <div class="project-card">
              <div class="icon">{card.icon}</div>
              <h3 class="name">{card.title}</h3>

              {#if card.summary}
                <p class="summary">{card.summary}</p>
              {/if}

              {#if card.tags}
                <p class="tags">{card.tags}</p>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>

</div>


<style>
  /* PAGE TITLE */
  .gallery-title {
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3.5rem;
  }
  .gallery-title .title {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-main);
  }
  .gallery-title .subtitle {
    opacity: 0.7;
    font-size: 1.05rem;
  }

  /* SECTIONS */
  .section-block {
    margin-bottom: 4rem;
  }
  .section-title {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--text-main);
  }

  /* CARDS */
  .grid {
    display: grid;
    gap: 1.4rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .project-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 1.25rem;
    border-radius: 14px;
    transition: 0.25s ease;
  }
  .project-card:hover {
    transform: translateY(-4px);
    border-color: var(--primary);
    box-shadow: 0 0 18px rgba(255, 122, 26, 0.25);
  }
  .icon {
    font-size: 1.9rem;
    margin-bottom: 0.4rem;
  }
  .name {
    font-size: 1.1rem;
    font-weight: 600;
  }
  .summary {
    opacity: 0.75;
    font-size: 0.9rem;
    margin: 0.25rem 0;
  }
  .tags {
    font-size: 0.78rem;
    opacity: 0.55;
  }
</style>
