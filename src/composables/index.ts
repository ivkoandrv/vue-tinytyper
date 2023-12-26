import type {
  ToolbarGroup,
  useTinyTyperComposable,
  useTinyTyperComposableParams,
  useTinyTyperInstances,
} from "@/TinyTyper";
import { computed, onBeforeUnmount, onMounted, Ref, ref } from "vue";
import type { ComputedRef } from "vue";
import { toolbarItems, floatingFormatters } from "@/config/toolbarConfig";
import { debounce, utilFunctions } from "./utils";
import { TinyTyperFloatingParameters } from "@/TinyTyper";
import {
  DEFAULT_CONTAINER,
  DEFAULT_DEBOUNCE_MS,
  DEFAULT_TEXT_OFFSET,
} from "@/config/tinyTyperConfig";

export function useTinyTyper({
  content,
  editorRef,
}: useTinyTyperComposableParams): useTinyTyperComposable {
  /*
    Ref for the selection region
   */
  const selectionRect = ref<DOMRect | null>(null);

  /*
  I save text content here. Will be refactored
   */
  const inputData = ref<string>(""); // text

  /*
  Floating Bar options
   */
  const floatingBarOptions: Ref<TinyTyperFloatingParameters> = ref({
    left: 0,
    top: 0,
    isSelected: false,
  });

  /*
  Get all toolbar items
   */
  const getToolBarItems: ComputedRef<ToolbarGroup[]> = computed(
    () => toolbarItems,
  );

  /*
  Call function from the utils
   */
  const callFunction = (functionName: string, actionId: string): void => {
    utilFunctions[functionName](actionId);
  };

  /*
  Get current instance
   */
  const getInstances: ComputedRef<useTinyTyperInstances> = computed(() => ({
    content,
    editorRef,
  }));

  /*
  Get short items for the floating toolbar
   */
  const getFloatingToolbarItems: ComputedRef<ToolbarGroup> = computed(
    () => floatingFormatters,
  );

  const getContent = (): string => {
    const editor = editorRef.value;

    if (editor) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(editor);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);

      return editor?.innerHTML;
    }

    return "";
  };

  /*
  Set editor container ref
   */

  const setEditorRef = (): void => {
    editorRef.value = document.querySelector(DEFAULT_CONTAINER);
  };

  /*
  Handle Enter (create new line)
   */

    const handleEnterKey = (event: KeyboardEvent): void => {
        if (event.key === "Enter") {
            event.preventDefault();
            document.execCommand("insertHTML", false, "<br><br>");
        }
    };

    /*
    Check if format is active
     */
  const isFormatActive = (format: string): boolean => {
    const isActive: ComputedRef<boolean> = computed(() =>
      document.queryCommandState(format),
    );

    return isActive.value;
  };

  const updateSelection = debounce(() => {
    const selection = window.getSelection();

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      if (rect) {
        selectionRect.value = rect;

        floatingBarOptions.value.top =
          selectionRect.value?.top - DEFAULT_TEXT_OFFSET;
        floatingBarOptions.value.left = selectionRect.value?.left;
        floatingBarOptions.value.isSelected = !!selection?.toString().trim();
      }
    }
  }, DEFAULT_DEBOUNCE_MS);

  onMounted(() => {
    document.addEventListener("selectionchange", updateSelection);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("selectionchange", updateSelection);
  });

  /*
  Handle mouse events
   */
  const handleMouseUp = () => {
    updateSelection();
  };

  return {
    getToolBarItems,
    getFloatingToolbarItems,
    getInstances,
    handleEnterKey,
    setEditorRef,
    callFunction,
    getContent,
    isFormatActive,
    //updated data
    handleMouseUp,
    updateSelection,
    floatingBarOptions,
    selectionRect,
    inputData,
  };
}
