<template>
  <div class="tiny-typer-wrapper">
    <tiny-typer-toolbar></tiny-typer-toolbar>
    <div
      id="tinyTyperEditor"
      class="tiny-typer-content"
      contenteditable="true"
      @input="handleInput"
      @keydown.enter.prevent="tinyTyper.handleEnterKey"
      :innerHTML="content"
      @mousedown="tinyTyper.setEditorRef"
    ></div>
    <div class="tiny-typer-footer">
      <span class="tiny-typer-copyright">TinyTyper</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { useTinyTyper } from "@/composables";
import TinyTyperToolbar from "@/components/TinyTyperToolbar.vue";

const content = ref<string>("");
const editorRef = ref<HTMLDivElement | null>(null);
const emit = defineEmits<{
  (e: "onInput", data: string): void;
  (e: "onFocusOut", data: string): void;
}>();

const tinyTyper = useTinyTyper({ content, editorRef });

provide("tinyTyper", tinyTyper);

const handleInput = (): void => {
  const data: string = tinyTyper.getContent();

  emit("onInput", data);
};
</script>

<style scoped lang="scss">
/* Add your styles here */
</style>