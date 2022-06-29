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
            <div class="mb-6">
               <FormInput
                  label="Full Name"
                  placeholder="Sunday"
                  v-model="form.fullName"
               />
            </div>
            <div class="mb-6">
               <FormInput
                  label="Phone"
                  type="phone"
                  placeholder="970224253"
                  v-model="form.phone"
               />
            </div>
            <div class="mb-6">
               <FormInput
                  label=" Email"
                  placeholder="sunday@gmail.com"
                  v-model="form.email"
               />
            </div>
            <div class="mb-6">
               <FormInput
                  type="password"
                  label="Password"
                  v-model="form.password"
               />
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
               Create Account
            </button>
         </div>
         <div class="flex justify-between pt-4 space-x-2 px-4 text-sm">
            <NuxtLink to="/forgot"><a href="">Forgot Password</a></NuxtLink>
            <NuxtLink to="/">
               <a href="" class="text-blue-700 font-medium">Login</a>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "signup",
   data() {
      return {
         form: {},
      };
   },
};
</script>
