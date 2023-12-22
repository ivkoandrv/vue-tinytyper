import { computed as _, defineComponent as b, inject as v, openBlock as l, createElementBlock as u, createElementVNode as m, Fragment as f, renderList as T, unref as y, toDisplayString as I, ref as g, provide as k, createVNode as E, withKeys as C, withModifiers as F, pushScopeId as N, popScopeId as R } from "vue";
const S = [
  {
    order: 0,
    toolbarItems: [
      {
        id: "undo",
        order: 0,
        name: "Undo",
        icon: "icon-undo",
        functionName: "undoRedo"
      },
      {
        id: "redo",
        order: 1,
        name: "Redo",
        icon: "icon-redo",
        functionName: "undoRedo"
      }
    ]
  },
  {
    order: 1,
    toolbarItems: [
      {
        id: "bold",
        order: 0,
        name: "Bold",
        icon: "icon-bold",
        functionName: "toggleFormat"
      },
      {
        id: "italic",
        order: 1,
        name: "Italic",
        icon: "icon-italic",
        functionName: "toggleFormat"
      },
      {
        id: "strikeThrough",
        order: 2,
        name: "Strike",
        icon: "icon-strike",
        functionName: "toggleFormat"
      },
      {
        id: "underline",
        order: 3,
        name: "Underline",
        icon: "icon-underline",
        functionName: "toggleFormat"
      }
    ]
  }
], x = {
  toggleFormat: (e) => {
    document.execCommand(e);
  },
  undoRedo: (e) => {
    document.execCommand(e);
  }
};
function B({
  content: e,
  editorRef: n
}) {
  const r = _(
    () => S
  ), s = (t, i) => {
    x[t](i);
  }, a = _(() => ({
    content: e,
    editorRef: n
  }));
  return {
    getToolBarItems: r,
    getInstances: a,
    handleEnterKey: (t) => {
      t.key === "Enter" && (t.preventDefault(), document.execCommand("insertHTML", !1, "<br><br>"));
    },
    setEditorRef: () => {
      n.value = document.querySelector(".tiny-typer-content");
    },
    callFunction: s,
    getContent: () => {
      const t = n.value;
      if (t) {
        const i = document.createRange(), d = document.getSelection();
        return i.selectNodeContents(t), i.collapse(!1), d == null || d.removeAllRanges(), d == null || d.addRange(i), t == null ? void 0 : t.innerHTML;
      }
      return "";
    }
  };
}
const M = { class: "tiny-typer-toolbar" }, w = { class: "tiny-typer-toolbar-nav" }, K = ["onClick"], h = /* @__PURE__ */ b({
  __name: "TinyTyperToolbar",
  setup(e) {
    const { getToolBarItems: n, callFunction: r } = v("tinyTyper");
    return (s, a) => (l(), u("div", M, [
      m("div", w, [
        (l(!0), u(f, null, T(y(n), (o) => (l(), u("ul", {
          class: "tiny-typer-toolbar-nav-item",
          key: o.order
        }, [
          (l(!0), u(f, null, T(o.toolbarItems, (c) => (l(), u("li", {
            key: c.order
          }, [
            m("button", {
              onClick: (p) => y(r)(c.functionName, c.id)
            }, I(c.name), 9, K)
          ]))), 128))
        ]))), 128))
      ])
    ]));
  }
}), L = (e) => (N("data-v-6b2cb368"), e = e(), R(), e), $ = { class: "tiny-typer-wrapper" }, H = ["innerHTML"], O = /* @__PURE__ */ L(() => /* @__PURE__ */ m("div", { class: "tiny-typer-footer" }, [
  /* @__PURE__ */ m("span", { class: "tiny-typer-copyright" }, "TinyTyper")
], -1)), j = /* @__PURE__ */ b({
  __name: "TinyTyperBase",
  emits: ["onInput", "onFocusOut"],
  setup(e, { emit: n }) {
    const r = g(""), s = g(null), a = n, o = B({ content: r, editorRef: s });
    k("tinyTyper", o);
    const c = () => {
      const p = o.getContent();
      a("onInput", p);
    };
    return (p, t) => (l(), u("div", $, [
      E(h),
      m("div", {
        id: "tinyTyperEditor",
        class: "tiny-typer-content",
        contenteditable: "true",
        onInput: c,
        onKeydown: t[0] || (t[0] = C(F(
          //@ts-ignore
          (...i) => y(o).handleEnterKey && y(o).handleEnterKey(...i),
          ["prevent"]
        ), ["enter"])),
        innerHTML: r.value,
        onMousedown: t[1] || (t[1] = //@ts-ignore
        (...i) => y(o).setEditorRef && y(o).setEditorRef(...i))
      }, null, 40, H),
      O
    ]));
  }
}), D = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of n)
    r[s] = a;
  return r;
}, U = /* @__PURE__ */ D(j, [["__scopeId", "data-v-6b2cb368"]]), V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TinyTyperBase: U,
  TinyTyperToolbar: h
}, Symbol.toStringTag, { value: "Module" }));
function q(e) {
  for (const n in V)
    (void 0)(n);
}
const A = { install: q };
export {
  U as TinyTyperBase,
  h as TinyTyperToolbar,
  A as default
};
