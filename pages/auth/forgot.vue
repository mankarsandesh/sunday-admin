<template>
   <div
      class="
         relative
         flex
         items-top
         justify-center
         min-h-screen
         bg-gray-100
         sm:items-center sm:pt-0
      "
   >
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 w-2/6">
         <div class="bg-white overflow-hidden shadow sm:rounded-lg p-6">
            <!-- <h1 class="text-3xl leading-7 font-semibold mb-5 text-center">
               Sunday
               <span class="text-blue-500">Admin</span>
            </h1> -->
            <img
               class="h-14 w-auto mb-10 m-auto"
               src="/logo.png"
               alt="Your Company"
            />
            <form>
               <div class="mb-6">
                  <FormInput
                     label="Your Email or Phone"
                     placeholder="sunday@gmail.com"
                  />
               </div>

               <button
                  type="submit"
                  class="
                     text-white
                     bg-red-500
                     hover:bg-red-600
                     focus:ring-4 focus:outline-none focus:ring-blue-300
                     font-medium
                     rounded-lg
                     text-sm
                     w-full
                     sm:w-auto
                     px-5
                     py-2.5
                     text-center
                     dark:bg-blue-600
                     dark:hover:bg-blue-700
                     dark:focus:ring-blue-800
                  "
               >
                  Reset Password
               </button>
            </form>
         </div>
         <div class="flex justify-between pt-4 space-x-2 px-4 text-sm">
            <NuxtLink to="/auth"
               ><a href="" class="text-red-500 font-medium"
                  >Back to login</a
               ></NuxtLink
            >
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "IndexPage",
};
</script>
