<script>
  export let data;
</script>

<section class="container section">
	<div class="stack container max-w-7xl space-y-6">
  <!-- 🧠 Blog Header -->
  <header class="blog-header">
    <h1 class="page-title">Blog</h1>

    <p class="blog-intro">
      Notes on automation systems, engineering decisions, and patterns discovered
      while building real-world workflows.
    </p>
  </header>

  <!-- 🧭 Categories -->
<div class="category-block">
  <p class="section-label">Explore by category</p>

  <div class="category-list">
    {#each Object.keys(data.categories).sort() as cat}
      <a
        href={`/blog/category/${cat}`}
        class="cat-pill"
        aria-label={`View posts in ${cat}`}
      >
        #{cat}
      </a>
    {/each}
  </div>
</div>


  <!-- 📰 Posts -->
<div class="blog-grid-wrapper">
  <div class="grid-list">

    {#each data.posts as post}
      <a class="blog-card hover-lift" href={`/blog/${post.slug}`}>

{#if post.heroImage}
  <div class="thumb">
    <img
      src={post.heroImage}
      alt={post.title}
      loading="lazy"
      decoding="async"
    />
  </div>
{/if}


        <div class="card-body">
          <h2 class="card-title">{post.title}</h2>

          {#if post.date}
            <p class="card-meta">{post.date}</p>
          {/if}

          {#if post.tags?.length}
            <p class="card-tags">{post.tags.join(' • ')}</p>
          {/if}
        </div>
      </a>
    {/each}
  </div>
</div>


  <!-- 🔙 Back -->
  <div class="mt-10">
    <a href="/" class="btn-primary w-fit">
      <span>← Back to Homepage</span>
    </a>
  </div>
</div>
</section>



<style>
/* =========================
   BLOG HEADER
========================= */
.blog-header {
  max-width: 680px;
  margin-bottom: 2.5rem;
}

.page-title {
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.5px;
  margin-bottom: 0.6rem;
}

.blog-intro {
  font-size: 1.05rem;
  line-height: 1.6;
  opacity: 0.75;
}

/* =========================
   CATEGORY BLOCK
========================= */
.category-block {
  margin-bottom: 2.5rem;
}

.section-label {
  font-size: 0.85rem;
  opacity: 0.6;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.category-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* =========================
   BLOG CARD BODY
========================= */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.blog-grid-wrapper {
  max-width: 1050px;   /* slightly narrower than container */
  margin-top: 2.5rem;
}

.cat-pill {
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.18);
  color: var(--text-soft);
  transition: all 0.25s ease;
}

.cat-pill:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: rgba(255,140,0,0.12);
  box-shadow: 0 0 12px rgba(255,140,0,0.18);
  transform: translateY(-1px);
}

.thumb {
  width: 100%;
  max-width: 360px;       /* 👈 THIS controls thumbnail size */
  aspect-ratio: 16 / 9;   /* keeps it editorial */
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
