import type { tinyTyperUtilFunctions } from "@/TinyTyper";

export const utilFunctions: tinyTyperUtilFunctions  = {
  toggleFormat: (format: string) : void => {
      document.execCommand(format)
  },
  undoRedo: (action: "undo" | "redo") : void => {
      document.execCommand(action)
  },
}

