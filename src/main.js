import { defineCustomElement } from "vue";
import App from "./components/chat-widget.ce.vue";

const element = defineCustomElement(App);

customElements.define("chat-widget", element);