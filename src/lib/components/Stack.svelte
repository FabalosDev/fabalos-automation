<script>
  import { BarChart2, FileText, Bell, Database, Bot, Repeat } from 'lucide-svelte';
</script>

<section id="stack" class="section bg-background text-main">
  <div class="container">

    <!-- 🔹 What's Possible -->
    <h2 class="text-3xl font-heading text-center mb-2 text-primary">What's Possible</h2>
    <p class="text-center text-soft mb-12">Discover workflows that radically save time</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      <!-- ✅ Use Case 1 -->
      <div class="rounded-2xl bg-white p-6 text-center shadow-md hover:shadow-lg transition">
        <BarChart2 class="mx-auto mb-4 text-primary" size="32" stroke-width="1.5" />
        <span class="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Report</span>
        <h3 class="text-xl font-semibold text-primary mb-2">Generate weekly reports</h3>
        <p class="text-soft text-sm">Automate the creation of complex reports.</p>
      </div>

      <!-- ✅ Use Case 2 -->
      <div class="rounded-2xl bg-white p-6 text-center shadow-md hover:shadow-lg transition">
        <FileText class="mx-auto mb-4 text-primary" size="32" stroke-width="1.5" />
        <span class="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Process</span>
        <h3 class="text-xl font-semibold text-primary mb-2">Process form submissions</h3>
        <p class="text-soft text-sm">Handle and organize form data efficiently.</p>
      </div>

      <!-- ✅ Use Case 3 -->
      <div class="rounded-2xl bg-white p-6 text-center shadow-md hover:shadow-lg transition">
        <Bell class="mx-auto mb-4 text-primary" size="32" stroke-width="1.5" />
        <span class="inline-block bg-yellow-100 text-yellow-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Notify</span>
        <h3 class="text-xl font-semibold text-primary mb-2">Notify your users</h3>
        <p class="text-soft text-sm">Send automated messages to your audience.</p>
      </div>

    </div>
  </div>

  <!-- 🚀 Tools & Technologies -->
  <div class="container">
    <h2 class="text-3xl font-heading text-center mt-20 mb-8 text-primary">Tech & Tools I Use</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
      
      <!-- 🛠️ Make.com -->
      <div class="rounded-2xl bg-white p-6 text-center shadow-md hover:shadow-lg transition">
        <Repeat class="mx-auto mb-4 text-primary" size="32" stroke-width="1.5" />
        <h3 class="text-xl font-semibold text-primary mb-2">Make.com</h3>
        <p class="text-soft text-sm mt-2">Visual builder with powerful integrations.</p>
      </div>

      <!-- 🧠 GPT -->
      <div class="rounded-2xl bg-white p-6 text-center shadow-md hover:shadow-lg transition">
        <Bot class="mx-auto mb-4 text-primary" size="32" stroke-width="1.5" />
        <h3 class="text-xl font-semibold text-primary mb-2">GPT</h3>
        <p class="text-soft text-sm mt-2">Context-aware tagging and data generation.</p>
      </div>

      <!-- 🔁 n8n -->
      <div class="rounded-2xl bg-white p-6 text-center shadow-md hover:shadow-lg transition">
        <Database class="mx-auto mb-4 text-primary" size="32" stroke-width="1.5" />
        <h3 class="text-xl font-semibold text-primary mb-2">n8n</h3>
        <p class="text-soft text-sm mt-2">Self-hosted flows for secure automation pipelines.</p>
      </div>

    </div>
  </div>
</section>