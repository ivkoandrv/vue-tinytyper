<script setup lang="ts">
import type { TinyTyperToolbarNavItemProps } from "@/TinyTyper";
import TinyTyperIcon from "@/components/TinyTyperIcon.vue";
import { computed, inject, onMounted, onUnmounted, Ref, ref, watch } from "vue";

// const { isFormatActive } = inject("tinyTyper") as useTinyTyperComposable;

const props = defineProps<TinyTyperToolbarNavItemProps>()

const isActive: Ref<boolean> = ref(document.queryCommandState(props.item.id));

const emit = defineEmits(["click"]);

const onClick = (data: Event ) : void => {
  emit('click', data)
}

onMounted(() => {
  const updateState = () => {
    isActive.value = document.queryCommandState(props.item.id);
  };

  updateState();

  const observer = new MutationObserver(updateState);

  observer.observe(document.body, {
    attributes: true,
    subtree: true,
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});

</script>

<template>
  <button class="tiny-typer-toolbar-nav-item-action" :class="{'active' : isActive}" @click="onClick">
    <tiny-typer-icon size="medium" :icon="props.item.icon"></tiny-typer-icon>
    <span v-if="props.showLabel">{{props.item.name}}</span>
  </button>
</template>

<style scoped>

</style>