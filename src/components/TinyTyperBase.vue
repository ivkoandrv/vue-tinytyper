<template>
  <div class="tiny-typer tiny-typer-wrapper">
    <tiny-typer-toolbar></tiny-typer-toolbar>
    <tiny-typer-floating-bar
      :config="floatingBarOptions"
    ></tiny-typer-floating-bar>
    <div
      id="tinyTyperEditor"
      class="tiny-typer-content"
      contenteditable="true"
      @input="handleInput"
      @keydown.enter.prevent="tinyTyper.handleEnterKey"
      @mouseup="tinyTyper.handleMouseUp"
      @selectionchange="tinyTyper.updateSelection"
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
import type { TinyTyperBaseEmits } from "@/TinyTyper";
import TinyTyperFloatingBar from "@/components/TinyTyperFloatingBar.vue";

const content = ref<string>("");
const editorRef = ref<HTMLDivElement | null>(null);

const emit = defineEmits<TinyTyperBaseEmits>();

const tinyTyper = useTinyTyper({ content, editorRef });

provide("tinyTyper", tinyTyper);

const { inputData, floatingBarOptions } = tinyTyper;

const handleInput = (): void => {
  const data: string = tinyTyper.getContent();
  inputData.value = data;
  emit("onInput", data);
};
</script>

<style scoped lang="scss"></style>
