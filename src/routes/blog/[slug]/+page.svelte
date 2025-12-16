<script>
  export let data;
  const post = data.post;
</script>

<svelte:head>
  <title>{post.seo?.title || `${post.title} · Blog · Fabalos Automation`}</title>

  <meta
    name="description"
    content={post.seo?.description || post.excerpt || post.title}
  />

  <!-- Open Graph -->
  <meta property="og:title" content={post.seo?.title || post.title} />
  <meta property="og:description" content={post.seo?.description || post.excerpt} />
  <meta property="og:image" content={post.seo?.ogImage || post.heroImage} />
  <meta property="og:type" content="article" />
</svelte:head>


<section class="blog-container">
  <h1 class="blog-title">{post.title}</h1>

  <p class="blog-meta">
    {post.date} • {post.tags.join(" • ")}
  </p>

{#if post.heroImage}
  <div class="blog-hero-wrap">
    <img
      src={post.heroImage}
      alt={post.title}
      loading="eager"
      decoding="async"
    />
  </div>
{/if}



  <!-- SECTION LOOP -->
  {#each post.sections as sec}
    <article class="blog-section">

      {#if sec.image}
        <img
          src={sec.image}
          alt={sec.title || 'section image'}
          class="section-image"
          loading="lazy"
          decoding="async"
          width="1200"
          height="600"
        />
      {/if}

      <div class="section-text">
        {@html sec.paragraph}
      </div>

    </article>
  {/each}


  {#if post.footerNote}
    <div class="footer-block">
      {@html post.footerNote}
    </div>
  {/if}


  <a href="/blog" class="btn-primary mt-8 w-fit">
    <span>← Back to Blog</span>
  </a>

</section>

<style>
.blog-container {
  max-width: 830px;
  margin: 0 auto;
  padding: 3.5rem 1.2rem;
  padding-bottom: 5rem; /* add this */
}

.blog-title {
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.6rem;
}

.blog-meta {
  opacity: 0.75;
  margin-bottom: 2.2rem;
}

/* HERO IMAGE */
.blog-hero {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 2.8rem;
  border: 1px solid rgba(255,255,255,0.12);
}

/* SECTIONS */
.blog-section {
  margin-bottom: 3.4rem;
}

.section-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1.2rem;
  border: 1px solid rgba(255,255,255,0.12);
}

.section-text {
  font-size: 1.14rem;
  line-height: 1.78;
  opacity: 0.92;
}

/* FOOTER NOTE */
.footer-block {
  margin-top: 3.2rem;
  padding: 1.6rem;
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  line-height: 1.72;
  font-size: 1rem;
}

.blog-container {
  max-width: 820px;          /* keeps text readable */
  margin: 0 auto;
  padding: 3rem 1.2rem;
}

/* =========================
   HERO IMAGE
========================= */
.blog-hero-wrap {
  width: 100%;
  margin: 2.5rem 0 3rem;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.blog-hero-wrap img {
  width: 100%;
  height: auto;              /* 👈 SHOW FULL IMAGE */
  display: block;
  object-fit: cover;
}

/* optional soft glow */
.blog-hero-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: 0 0 40px rgba(255,140,0,0.12);
}

</style>
