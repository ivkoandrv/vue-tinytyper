import type {
  ToolbarGroup,
  useTinyTyperComposable,
  useTinyTyperComposableParams,
  useTinyTyperInstances,
} from "@/TinyTyper";
import { computed } from "vue";
import type { ComputedRef } from "vue";
import toolbarItems from "@/config/toolbarConfig";
import { utilFunctions } from "./utils";


/*
  Types bug list:

  src/composables/index.ts:19:7 - error TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'tinyTyperUtilFunctions'.
  No index signature with a parameter of type 'string' was found on type 'tinyTyperUtilFunctions'.

 */
export function useTinyTyper({
  content,
  editorRef,
}: useTinyTyperComposableParams): useTinyTyperComposable {


  const getToolBarItems: ComputedRef<ToolbarGroup[]> = computed(
    () => toolbarItems,
  );

  const callFunction = (functionName: string, actionId: string): void => {
    utilFunctions[functionName](actionId);
  };

  const getInstances: ComputedRef<useTinyTyperInstances> = computed(() => ({
    content,
    editorRef,
  }));



  const getContent = (): string => {
    const editor = editorRef.value;

    if (editor) {
      const range = document.createRange();
      const selection = document.getSelection();
      range.selectNodeContents(editor);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);

      return editor?.innerHTML;
    }

    return "";
  };

  const setEditorRef = (): void => {
    editorRef.value = document.querySelector(".tiny-typer-content");
  };

  const handleEnterKey = (event: KeyboardEvent): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.execCommand("insertHTML", false, "<br><br>");
    }
  };

  return {
    getToolBarItems,
    getInstances,
    handleEnterKey,
    setEditorRef,
    callFunction,
    getContent,
  };
}
