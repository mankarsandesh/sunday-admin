import Vue from "vue";
import { FormInput } from "@/components/Forms";

[FormInput].forEach((Component) => {
  Vue.component(Component.name, Component);
});
