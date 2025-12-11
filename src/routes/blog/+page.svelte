<script>
	import Footer from '$lib/components/Footer.svelte';
  export let data;

</script>

<section class="container py-16">
  <h1 class="page-title">Blog</h1>

  <h2 class="category-title">Categories</h2>

<div class="category-list mt-5">
  {#each Object.keys(data.categories).sort() as cat}
    <a href={`/blog/category/${cat}`} class="cat-pill">
      {cat}
    </a>
  {/each}
</div>


  <div class="grid-list">
    {#each data.posts as post}
      <a class="blog-card" href={`/blog/${post.slug}`}>

  {#if post.heroImage}
    <img
      src={post.heroImage}
      alt={post.title}
      class="card-img"
      loading="lazy"
      decoding="async"
      width="600"
      height="400"
    />
  {/if}


        <h2 class="card-title">{post.title}</h2>
        <p class="card-meta">{post.date}</p>

        <p class="card-tags">
          {post.tags.join(" • ")}
        </p>

      </a>
    {/each}
  </div>

  		<!-- Back Button -->
		<a href="/" class="btn-primary mt-6 w-fit">
			<span>← Back to Homepage</span>
		</a>

</section>

<Footer />

<style>
/* =========================================
   GLOBAL CONTAINER
========================================= */
.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 3rem 1.2rem;
}

/* =========================================
   TITLES
========================================= */
.page-title {
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.section-label {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 0.4rem;
}

/* =========================================
   CATEGORY LIST
========================================= */
.category-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.cat-pill {
  padding: 6px 14px;
  background: rgba(255,255,255,0.04);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.14);
  font-size: 0.85rem;
  transition: 0.2s ease-out;
}

.cat-pill:hover {
  border-color: var(--primary);
  background: rgba(255,140,0,0.08);
  color: var(--primary);
  box-shadow: 0 0 10px rgba(255,140,0,0.12);
}

/* =========================================
   BLOG GRID
========================================= */
.grid-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-bottom: 3rem;
}

/* =========================================
   BLOG CARD (BASE)
========================================= */
.blog-card {
  background: var(--surface);
  padding: 1.25rem;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.12);
  display: flex;
  flex-direction: column;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

/* hover */
.blog-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary);
  box-shadow: 0 0 18px rgba(255,140,0,0.12);
}

/* neon border highlight */
.blog-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255,140,40,0.2),
    rgba(0,140,255,0.15)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                 linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: 0.35s ease;
}

.blog-card:hover::after {
  opacity: 1;
}

/* =========================================
   CARD IMAGE
========================================= */
.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
}

/* =========================================
   CARD TEXT
========================================= */
.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.card-meta {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-bottom: 0.5rem;
}

.card-tags {
  font-size: 0.75rem;
  opacity: 0.75;
}
</style>
