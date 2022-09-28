<template>
   <main
      class="
         h-screen
         w-full
         flex flex-col
         justify-center
         items-center
         bg-[#1A2238]
      "
   >
      <img
         class="h-14 w-auto mb-10 m-auto"
         src="/logo.png"
         alt="Your Company"
      />
      <h1
         class="text-9xl font-extrabold text-white tracking-widest"
         v-if="error.statusCode === 404"
      >
         404
      </h1>
      <h1 v-else>An error occurred</h1>
      <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
         Page Not Found
      </div>
      <button class="mt-5">
         <a
            class="
               relative
               inline-block
               text-sm
               font-medium
               text-[#FF6A3D]
               group
               active:text-orange-500
               focus:outline-none focus:ring
            "
         >
            <span
               class="
                  absolute
                  inset-0
                  transition-transform
                  translate-x-0.5 translate-y-0.5
                  bg-[#FF6A3D]
                  group-hover:translate-y-0 group-hover:translate-x-0
               "
            ></span>

            <span
               class="
                  relative
                  block
                  px-8
                  py-3
                  bg-[#1A2238]
                  border border-current
               "
            >
               <router-link to="/">Go Home</router-link>
            </span>
         </a>
      </button>
   </main>
</template>

<script>
export default {
   props: ["error"],
   layout: "blog", // you can set a custom layout for the error page
};
</script>