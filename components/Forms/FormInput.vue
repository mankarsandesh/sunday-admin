<template>
   <div class="w-full">
      <label
         for="email"
         class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
         >{{ label }}
      </label>
      <input
         :type="type"
         :name="name"
         :value="value"
         :autocomplete="autocomplete"
         @input="updateInput"
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
         :placeholder="placeholder"
         :disabled="disabled"
      />
   </div>
</template>

<script>
export default {
   name: "FormInput",
   props: {
      label: {
         type: String,
         default: null,
      },
      placeholder: {
         type: String,
         default: null,
      },
      value: {
         default: null,
      },
      autocomplete: {
         default: "off",
      },
      rules: {
         type: [Array, String, Object],
      },
      name: {
         type: String,
         required: false,
      },
      disabled: {
         type: Boolean,
         default: false,
      },
      type: {
         type: String,
         default: "text",
      },
   },
   methods: {
      updateInput(e) {
         this.$emit("input", e.target.value);
      },
   },
};
</script>
