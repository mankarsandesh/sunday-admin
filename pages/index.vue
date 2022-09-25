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
            <h1 class="text-3xl leading-7 font-semibold mb-5 text-center">
               Sunday
               <span class="text-blue-500">Admin</span>
            </h1>
            <form>
               <div class="mb-6">
                  <FormInput
                     label="Your Email or Phone"
                     placeholder="sunday@gmail.com"
                  />
               </div>
               <div class="mb-6">
                  <FormInput type="password" label="Password" />
               </div>
               <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                     <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="
                           w-4
                           h-4
                           border border-gray-300
                           rounded
                           bg-gray-50
                           focus:ring-3 focus:ring-blue-300
                           dark:bg-gray-700
                           dark:border-gray-600
                           dark:focus:ring-blue-600
                           dark:ring-offset-gray-800
                        "
                        required
                     />
                  </div>
                  <label
                     for="remember"
                     class="
                        ml-2
                        text-sm
                        font-medium
                        text-gray-900
                        dark:text-gray-300
                     "
                     >Remember me</label
                  >
               </div>
               <button
                  type="submit"
                  class="
                     text-white
                     bg-blue-700
                     hover:bg-blue-800
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
                  Login
               </button>
            </form>
         </div>
         <div class="flex justify-between pt-4 space-x-2 px-4 text-sm">
            <NuxtLink to="/forgot"><a href="">Forgot Password</a></NuxtLink>
            <NuxtLink to="/signup"
               ><a href="" class="text-blue-700 font-medium"
                  >Sign Up</a
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
