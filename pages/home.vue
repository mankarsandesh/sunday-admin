<template>
   <main class="flex-1">
      <font-awesome-icon :icon="['fas', 'home']" />
      <div class="py-6">
         <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
         </div>
         <font-awesome-icon :icon="['fas', 'adjust']" />

         <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div class="py-4">
               <div
                  class="h-96 rounded-lg border-4 border-dashed border-gray-200"
               ></div>
            </div>
         </div>
      </div>
   </main>
</template>

<script>
export default {
   name: "Home",
   layout: "dashboard",
};
</script>
