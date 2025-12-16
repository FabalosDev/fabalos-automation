<script>
  export let data;
  const { category, posts } = data;
</script>

<svelte:head>
  <title>{category} · Blog · Fabalos Automation</title>

  <meta
    name="description"
    content={`Articles filed under "${category}" — automation insights, systems thinking, and engineering notes from Fabalos Automation.`}
  />

  <meta property="og:title" content={`${category} · Fabalos Blog`} />
  <meta
    property="og:description"
    content={`Explore ${posts.length} article(s) under the "${category}" category.`}
  />
  <meta property="og:image" content="/og-blog-category.png" />
</svelte:head>

<section class="container section">
  	<div class="stack container max-w-7xl space-y-6">

  <!-- 🔹 Header -->
  <header class="mb-10 max-w-3xl">
    <p class="text-soft text-sm mb-1">Blog Category</p>

    <h1 class="font-heading text-primary text-4xl mb-2">
      {category}
    </h1>

    <p class="text-soft text-base">
      {posts.length} article{posts.length === 1 ? '' : 's'} exploring
      <strong class="text-main"> {category.toLowerCase()}</strong>,
      system design, and automation insights.
    </p>
  </header>

  <!-- 🔸 Empty State -->
  {#if posts.length === 0}
    <div class="bg-surface border-border rounded-xl border p-8 text-center text-soft">
      <p class="mb-2">No posts found in this category.</p>
      <p class="text-sm opacity-70">More articles will be added over time.</p>
    </div>
  {:else}

    <!-- 🔹 Grid -->
    <div class="grid-list">
      {#each posts as post}
        <a
          class="blog-card hover-lift"
          href={`/blog/${post.slug}`}
          aria-label={`Read ${post.title}`}
        >

          {#if post.heroImage}
            <img
              src={post.heroImage}
              alt={post.title}
              class="card-img"
              loading="lazy"
              decoding="async"
              width="600"
              height="350"
            />
          {/if}

          <div class="stack gap-1">
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

  {/if}

  <!-- 🔙 Back -->
  <div class="mt-10">
    <a href="/blog" class="btn-primary w-fit">
      <span>← Back to Blog</span>
    </a>
  </div>
</div>
</section>



<style>
.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 3rem 1.2rem;
}

.grid-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

/* Blog Card */
.blog-card {
  background: var(--surface);
  border-radius: 16px;
  padding: 1.25rem;
  border: 1px solid rgba(255,255,255,0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease;
}

/* Soft neon edge */
.blog-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255,140,40,0.2),
    rgba(0,140,255,0.15)
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.blog-card:hover::after {
  opacity: 1;
}

.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 0.9rem;
  border: 1px solid rgba(255,255,255,0.1);
}

.card-title {
  font-size: 1.15rem;
  font-weight: 600;
}

.card-meta {
  font-size: 0.85rem;
  opacity: 0.7;
}

.card-tags {
  font-size: 0.75rem;
  opacity: 0.75;
}

</style>
