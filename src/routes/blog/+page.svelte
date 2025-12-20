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

    {#if data.posts.length === 0}
  <div class="bg-surface border-border rounded-xl border p-10 text-center text-soft">
    <p class="mb-2">No blog posts yet.</p>
    <p class="text-sm opacity-70">
      New automation notes will appear here soon.
    </p>
  </div>
{:else}
  <!-- grid here -->
{/if}

{#each Object.entries(data.categories).sort(([a], [b]) => a.localeCompare(b)) as [cat, posts]}
  <a
    href={`/blog/category/${cat}`}
    class="cat-pill"
    aria-label={`View posts in ${cat}`}
  >
    #{cat}
    <span class="opacity-60 ml-1">({posts.length})</span>
  </a>
{/each}

  </div>
</div>


<!-- 📰 Posts -->
<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

  {#each data.posts as post}
    <a class="case-card blog hover-lift" href={`/blog/${post.slug}`}>

{#if post.thumbnail}
  <img
    src={post.thumbnail}
    alt={post.title}
    class="case-thumb"
    loading="lazy"
    decoding="async"
  />
{/if}


      <h2 class="case-title">{post.title}</h2>

      {#if post.date}
        <p class="text-sm opacity-70">{post.date}</p>
      {/if}

      {#if post.tags?.length}
        <div class="case-tags">
          {#each post.tags as tag}
            <span class="case-tag">{tag}</span>
          {/each}
        </div>
      {/if}

      <span class="case-more">Read Article →</span>

    </a>
  {/each}

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

</style>
