import type { tinyTyperUtilFunction } from "@/TinyTyper";

export const utilFunctions: tinyTyperUtilFunction = {
  callAction: (action: string): void => {
    document.execCommand(action);
  },
};

export function debounce(func: Function, wait: number) {
  let timeout: number;
  return function (this: any) {
    // Add the correct type for 'this'
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
