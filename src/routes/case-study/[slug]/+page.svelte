<script>
  import Footer from '$lib/components/Footer.svelte';
  export let data;

  // Incoming JSON
  const study = data.study;

  const {
    title,
    summary,
    tags = [],
    tools = [],
    thumbnail,
    problem,
    solution,
    result,
    sections = []
  } = study;
</script>

<svelte:head>
  <title>{title} · Case Study · Fabalos Automation</title>
  <meta name="description" content={summary} />
</svelte:head>


<!-- ======================= HERO ======================= -->
<section class="case-hero">
  <div class="container hero-grid">

  {#if thumbnail}
    <img
      src={thumbnail}
      alt={title}
      class="hero-thumb"
      loading="lazy"
      decoding="async"
      width="260"
      height="260"
    />
  {/if}


    <div class="hero-info glass-card">
      <h1 class="case-title">{title}</h1>

      <p class="summary-text">{summary}</p>

      <div class="chip-row">
        {#each tags as t}
          <span class="chip tag">{t}</span>
        {/each}
      </div>

      <div class="chip-row">
        {#each tools as t}
          <span class="chip tool">{t}</span>
        {/each}
      </div>
    </div>
  </div>
</section>





<!-- =================== PSR BLOCK =================== -->
<section class="container psr-grid">

  <div class="psr-card glass-card" >
    <h3>Problem</h3>
    <p>{problem}</p>
  </div>

  <div class="psr-card glass-card">
    <h3>Solution</h3>
    <p>{solution}</p>
  </div>

  <div class="psr-card glass-card">
    <h3>Result</h3>
    <p>{result}</p>
  </div>

</section>




<!-- =================== SECTIONS =================== -->
<section class="container sections">

  {#each sections as sec}
    <article class="section-card">

      <h2 class="section-title">{sec.title}</h2>

  {#if sec.image}
    <img
      src={sec.image}
      alt={sec.title}
      class="section-img"
      loading="lazy"
      decoding="async"
      width="1200"
      height="600"
    />
  {/if}


      {#each sec.paragraphs as p}
        <p class="section-paragraph">{p}</p>
      {/each}

    </article>
  {/each}

  <a href="/case-study" class="btn-primary mt-10 w-fit">
    ← Back to Case Studies
  </a>

</section>

<Footer />




<!-- ======================= STYLES ======================= -->
<style>
  .container {
    max-width: 860px;
    margin: auto;
    padding: 2.5rem 1.2rem;
  }

  /* HERO */
  .case-hero {
    background: linear-gradient(135deg, #0c0c0c, #151515);
    padding: 3.5rem 0;
    border-bottom: 1px solid #222;
    margin-bottom: 2rem;
  }
  .hero-grid {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
  }
  .hero-thumb {
    width: 260px;
    border-radius: 14px;
    border: 1px solid #333;
    box-shadow: 0 0 14px rgba(255, 122, 26, 0.22);
  }
  .hero-info {
    flex: 1;
    min-width: 260px;
  }
  .case-title {
    font-size: 2.3rem;
    font-weight: 800;
    color: var(--text-main);
    margin-bottom: 0.7rem;
  }
  .summary-text {
    color: var(--text-soft);
    margin-bottom: 1rem;
    font-size: 1.05rem;
    line-height: 1.6;
  }

  /* CHIPS */
  .chip-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .chip {
    padding: 4px 12px;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .chip.tag {
    background: rgba(255, 122, 26, 0.13);
    color: #ff7a1a;
    border: 1px solid rgba(255, 122, 26, 0.35);
  }
  .chip.tool {
    background: rgba(120, 140, 255, 0.15);
    color: #9ab0ff;
    border: 1px solid rgba(120, 120, 255, 0.3);
  }



  /* PSR GRID */
  .psr-grid {
    margin-top: 2.5rem;
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .psr-card {
    padding: 1.4rem;
    border-radius: 14px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
  }

  .psr-card h3 {
    color: var(--primary);
    margin-bottom: 6px;
    font-size: 1.1rem;
  }

  .psr-card p {
    color: var(--text-soft);
    line-height: 1.6;
  }



  /* SECTIONS */
  .section-card {
    margin: 3rem 0;
    padding-bottom: 2rem;
    border-bottom: 1px solid #222;
  }
  .section-title {
    font-size: 1.45rem;
    margin-bottom: 1rem;
    color: var(--text-main);
  }
  .section-img {
    width: 100%;
    border-radius: 14px;
    margin-bottom: 1rem;
    border: 1px solid #333;
  }
  .section-paragraph {
    margin: 0.8rem 0;
    color: var(--text-soft);
    line-height: 1.75;
    font-size: 1.05rem;
  }




  /* --------------------------------------------------
   FOXOPS GLOW AESTHETIC  (Global Case Study Upgrade)
   -------------------------------------------------- */

/* Base glass surface card */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1.75rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.35s ease;
}

/* Subtle glowing border */
.glass-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 140, 40, 0.28),
    rgba(0, 180, 255, 0.22)
  );
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

/* Hover interaction */
.glass-card:hover::after {
  opacity: 1;
}

.glass-card:hover {
  border-color: var(--primary);
  box-shadow: 0 0 18px rgba(255, 140, 40, 0.18);
}

/* Optional animated sweep highlight */
.glass-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -60%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 150, 50, 0.12),
    transparent 60%
  );
  transform: rotate(25deg);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.glass-card:hover::before {
  opacity: 0.45;
}

</style>
