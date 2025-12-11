<section id="brands" class="section bg-surface text-main">
  <div class="stack center-text container max-w-7xl space-y-6">

    <h2 class="font-heading text-primary text-3xl">Brands I’ve Worked With</h2>

    <p class="text-soft mb-6 text-lg">
      A snapshot of organizations where I’ve contributed to automation, workflow
      optimization, and technical operations.
    </p>

    <!-- ★ Symmetrical Logo Grid -->
    <div class="brand-grid">
      <div class="brand-box">
        <img src="/brands/festo.svg" alt="Festo" />
      </div>

      <div class="brand-box">
        <img src="/brands/icc.png" alt="Industrial Controls Corp" />
      </div>

      <div class="brand-box">
        <img src="/brands/thepurplefurball.png" alt="The Purple Furball" />
      </div>

      <div class="brand-box">
        <img src="/brands/glamgadget.jpg" alt="GlamGadget" />
      </div>

      <div class="brand-box">
        <img src="/brands/biohack.png" alt="Biohack Yourself" />
      </div>

      <div class="brand-box">
        <img src="/brands/mspl.png" alt="MSP Launchpad" />
      </div>
    </div>

  </div>

  <p class="mt-20 text-center text-[0.70rem] italic leading-relaxed opacity-60">
    Logos represent companies where I have delivered automation work through
    employment or project-based engagements. Displayed for capability reference
    only; not intended as endorsements or active partnerships.
  </p>
</section>

<style>
  /* ★ Grid becomes symmetrical regardless of logo size */
  .brand-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 2.5rem;
    place-items: center;
    margin-top: 1.5rem;
  }

  /* ★ Each logo sits inside a fixed-size box */
  .brand-box {
    width: 140px;
    height: 70px; /* all equal height */
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  .brand-box:hover {
    opacity: 1;
  }

  /* ★ Logos auto-scale but stay inside the box */
  .brand-box img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: brightness(0.95);
  }
</style>

<div class="section-divider"></div>
