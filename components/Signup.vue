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
               Sunday <span class="text-blue-500">Admin</span>
            </h1>
            <form>
               <div class="mb-6">
                  <label
                     for="email"
                     class="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-gray-900
                        dark:text-gray-300
                     "
                     >Your email
                  </label>
                  <input
                     type="email"
                     id="email"
                     class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900 text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        w-full
                        p-2.5
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                     "
                     placeholder="name@flowbite.com"
                     required
                  />
               </div>
               <div class="mb-6">
                  <label
                     for="password"
                     class="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-gray-900
                        dark:text-gray-300
                     "
                     >Your password</label
                  >
                  <input
                     type="password"
                     id="password"
                     class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900 text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        w-full
                        p-2.5
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                     "
                     required
                  />
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
                  Submit
               </button>
            </form>
         </div>
         <div class="flex justify-between pt-4 space-x-2 px-4 text-sm">
            <a href="">Forgot Password</a>
            <a href="" class="text-blue-700 font-medium">Sign Up</a>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Signup",
};
</script>
