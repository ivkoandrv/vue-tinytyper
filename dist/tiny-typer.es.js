import { ref as L, computed as H, onMounted as S, onBeforeUnmount as w, defineComponent as g, openBlock as l, createElementBlock as C, createElementVNode as f, onUnmounted as $, normalizeClass as x, createVNode as _, toDisplayString as U, createCommentVNode as k, inject as E, Fragment as v, renderList as Z, unref as s, normalizeStyle as R, provide as O, withKeys as D, withModifiers as z } from "vue";
const B = [
  {
    order: 0,
    toolbarItems: [
      {
        id: "undo",
        order: 0,
        name: "Undo",
        icon: "action-undo",
        functionName: "callAction"
      },
      {
        id: "redo",
        order: 1,
        name: "Redo",
        icon: "action-redo",
        functionName: "callAction"
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
        icon: "format-bold",
        functionName: "callAction"
      },
      {
        id: "italic",
        order: 1,
        name: "Italic",
        icon: "format-italic",
        functionName: "callAction"
      },
      {
        id: "strikeThrough",
        order: 2,
        name: "Strike",
        icon: "format-strike",
        functionName: "callAction"
      },
      {
        id: "underline",
        order: 3,
        name: "Underline",
        icon: "format-underline",
        functionName: "callAction"
      }
    ]
  }
], K = B[1], q = {
  callAction: (r) => {
    document.execCommand(r);
  }
};
function j(r, i) {
  let t;
  return function() {
    const c = this, a = arguments;
    clearTimeout(t), t = setTimeout(() => r.apply(c, a), i);
  };
}
const P = 100, X = 48, J = ".tiny-typer-content";
function Q({
  content: r,
  editorRef: i
}) {
  const t = L(null), c = L(""), a = L({
    left: 0,
    top: 0,
    isSelected: !1
  }), e = H(
    () => B
  ), n = (o, p) => {
    q[o](p);
  }, d = H(() => ({
    content: r,
    editorRef: i
  })), b = H(() => K), T = () => {
    const o = i.value;
    if (o) {
      const p = document.createRange(), y = window.getSelection();
      return p.selectNodeContents(o), p.collapse(!1), y == null || y.removeAllRanges(), y == null || y.addRange(p), o == null ? void 0 : o.innerHTML;
    }
    return "";
  }, u = () => {
    i.value = document.querySelector(J);
  }, m = (o) => {
    o.key === "Enter" && (o.preventDefault(), document.execCommand("insertHTML", !1, "<br><br>"));
  }, I = (o) => H(() => document.queryCommandState(o)).value, M = j(() => {
    var p, y;
    const o = window.getSelection();
    if (o && o.rangeCount > 0) {
      const V = o.getRangeAt(0).getBoundingClientRect();
      V && (t.value = V, a.value.top = ((p = t.value) == null ? void 0 : p.top) - X, a.value.left = (y = t.value) == null ? void 0 : y.left, a.value.isSelected = !!(o != null && o.toString().trim()));
    }
  }, P);
  return S(() => {
    document.addEventListener("selectionchange", M);
  }), w(() => {
    document.removeEventListener("selectionchange", M);
  }), {
    getToolBarItems: e,
    getFloatingToolbarItems: b,
    getInstances: d,
    handleEnterKey: m,
    setEditorRef: u,
    callFunction: n,
    getContent: T,
    isFormatActive: I,
    //updated data
    handleMouseUp: () => {
      M();
    },
    updateSelection: M,
    floatingBarOptions: a,
    selectionRect: t,
    inputData: c
  };
}
const W = {
  "tt-format-bold": "M15.25 11.8C15.7397 11.5018 16.1529 11.0934 16.4567 10.6073C16.7605 10.1212 16.9466 9.57077 17 9C17.0093 8.48388 16.9168 7.971 16.7278 7.49063C16.5388 7.01027 16.2571 6.57184 15.8986 6.20039C15.5402 5.82894 15.1121 5.53174 14.6387 5.32578C14.1654 5.11981 13.6561 5.00911 13.14 5H6.65002V19H13.65C14.1412 18.9948 14.6265 18.8929 15.0782 18.7001C15.53 18.5073 15.9394 18.2274 16.283 17.8764C16.6265 17.5253 16.8976 17.1101 17.0807 16.6543C17.2638 16.1985 17.3553 15.7112 17.35 15.22V15.1C17.3504 14.4071 17.1529 13.7285 16.781 13.144C16.409 12.5594 15.8778 12.0931 15.25 11.8ZM8.65002 7H12.85C13.2762 6.98681 13.6962 7.10428 14.0537 7.33665C14.4112 7.56902 14.6891 7.90517 14.85 8.3C15.0129 8.82779 14.9602 9.39859 14.7035 9.88765C14.4468 10.3767 14.0069 10.7443 13.48 10.91C13.2754 10.97 13.0632 11.0003 12.85 11H8.65002V7ZM13.25 17H8.65002V13H13.25C13.6762 12.9868 14.0962 13.1043 14.4537 13.3367C14.8112 13.569 15.0891 13.9052 15.25 14.3C15.4129 14.8278 15.3602 15.3986 15.1035 15.8877C14.8468 16.3767 14.4069 16.7443 13.88 16.91C13.6754 16.97 13.4632 17.0003 13.25 17Z",
  "tt-format-italic": "M11.76 9H13.76L11.56 19H9.56L11.76 9ZM13.44 5C13.2422 5 13.0489 5.05865 12.8844 5.16853C12.72 5.27841 12.5918 5.43459 12.5161 5.61732C12.4404 5.80004 12.4206 6.00111 12.4592 6.19509C12.4978 6.38907 12.593 6.56725 12.7329 6.70711C12.8727 6.84696 13.0509 6.9422 13.2449 6.98079C13.4389 7.01937 13.64 6.99957 13.8227 6.92388C14.0054 6.84819 14.1616 6.72002 14.2715 6.55557C14.3813 6.39112 14.44 6.19778 14.44 6C14.44 5.73478 14.3346 5.48043 14.1471 5.29289C13.9596 5.10536 13.7052 5 13.44 5Z",
  "tt-format-underline": "M19 20V22H5V20H19ZM16 13.215C15.9671 13.875 15.7711 14.5165 15.4297 15.0823C15.0883 15.6481 14.6121 16.1205 14.0435 16.4572C13.475 16.794 12.8318 16.9847 12.1716 17.0122C11.5114 17.0397 10.8546 16.9033 10.26 16.615C9.57464 16.3185 8.99341 15.8241 8.59077 15.1952C8.18813 14.5663 7.98242 13.8315 8 13.085V5.005H6V13.215C6.03383 14.1564 6.28885 15.0766 6.74442 15.9012C7.19998 16.7257 7.84329 17.4314 8.62227 17.9611C9.40125 18.4908 10.294 18.8296 11.2283 18.9502C12.1625 19.0707 13.1121 18.9696 14 18.655C15.1811 18.2613 16.2059 17.5012 16.9252 16.485C17.6446 15.4689 18.0211 14.2498 18 13.005V5.005H16V13.215ZM16 5H18H16ZM8 5H6H8Z",
  "tt-format-strike": "M3 12.2029H21V13.7029H16.6342C16.8711 14.2002 16.9906 14.7451 16.9836 15.2958C16.9977 15.8183 16.8855 16.3365 16.6567 16.8064C16.428 17.2764 16.0893 17.6843 15.6694 17.9955C14.6579 18.7072 13.4378 19.0607 12.2025 19C11.3 19.0061 10.4062 18.8224 9.57916 18.461C8.82387 18.1477 8.16917 17.6329 7.68652 16.9728C7.24212 16.3426 7.00762 15.5884 7.01636 14.8174V14.704H7.30359V14.7029H7.64508V14.704H9.02V14.8173C9.00433 15.1687 9.07382 15.5187 9.22253 15.8374C9.37125 16.1562 9.59479 16.4343 9.87413 16.648C10.5515 17.1303 11.372 17.3697 12.2025 17.3273C12.9356 17.3752 13.6645 17.1835 14.2792 16.7811C14.507 16.6126 14.6901 16.3908 14.8124 16.1351C14.9346 15.8794 14.9923 15.5977 14.9804 15.3145C14.9964 15.041 14.9459 14.7676 14.8332 14.5178C14.7205 14.268 14.5491 14.0493 14.3335 13.8801C14.2451 13.8161 14.1533 13.7569 14.0585 13.7029H3V12.2029ZM16.3447 7.0598C15.9232 6.40481 15.3271 5.88058 14.6236 5.54619C13.8394 5.1726 12.9793 4.98565 12.1107 4.99999C10.8996 4.94801 9.70883 5.32403 8.74719 6.06212C8.33435 6.38097 8.00134 6.79147 7.77448 7.26119C7.54762 7.73091 7.43313 8.24695 7.44006 8.76854C7.43656 9.26283 7.54659 9.75133 7.76166 10.1964H10.3583C10.275 10.1427 10.173 10.0906 10.1056 10.0358C9.90219 9.88567 9.73702 9.68968 9.62358 9.46372C9.51014 9.23777 9.45164 8.98823 9.45282 8.7354C9.43773 8.44679 9.49242 8.15879 9.61226 7.8958C9.73209 7.63282 9.91354 7.40258 10.1412 7.2246C10.7173 6.82506 11.4109 6.63053 12.1107 6.67217C12.8717 6.62379 13.6231 6.86239 14.2167 7.34087C14.465 7.57466 14.6594 7.85967 14.7865 8.17612C14.9136 8.49257 14.9703 8.83288 14.9527 9.17345V9.28686H16.9559V9.17345C16.9592 8.42485 16.7471 7.69109 16.3447 7.0598Z",
  "tt-format-subscript": "M10.4 12L14 15.6L12.6 17L9 13.4L5.4 17L4 15.6L7.6 12L4 8.4L5.4 7L9 10.6L12.6 7L14 8.4L10.4 12ZM18.3123 19.674L19.3805 18.5275C19.5765 18.3261 19.7514 18.1201 19.9173 17.9187C20.077 17.7245 20.2215 17.5182 20.3493 17.3017C20.469 17.1015 20.567 16.8892 20.6418 16.6683C20.7128 16.4534 20.7488 16.2284 20.7484 16.0021C20.7514 15.7207 20.6994 15.4415 20.5953 15.18C20.4968 14.9343 20.3427 14.7147 20.1451 14.5384C19.9353 14.3549 19.6899 14.2165 19.4242 14.132C18.7861 13.9419 18.1044 13.9575 17.4757 14.1766C17.1887 14.2851 16.9283 14.4538 16.712 14.6715C16.5032 14.8801 16.3413 15.1308 16.2372 15.407C16.1371 15.6735 16.0844 15.9553 16.0813 16.24L16.0777 16.477H17.617L17.6234 16.25C17.625 16.1234 17.643 15.9975 17.6772 15.8755C17.7105 15.7684 17.7637 15.6685 17.8339 15.5811C17.905 15.5007 17.9935 15.4377 18.0928 15.397C18.3174 15.308 18.5665 15.3028 18.7946 15.3824C18.8768 15.4185 18.9501 15.472 19.0096 15.5392C19.0704 15.611 19.1171 15.6935 19.1473 15.7825C19.1829 15.8908 19.2014 16.004 19.202 16.1179C19.2008 16.2075 19.1901 16.2967 19.17 16.384C19.1409 16.4883 19.0993 16.5887 19.046 16.683C18.9687 16.8192 18.8806 16.949 18.7827 17.0712C18.6483 17.2458 18.505 17.4135 18.3534 17.5734L16.197 19.9265V21H21V19.674H18.3123Z",
  "tt-format-superscript": "M10.4 12L14 15.6L12.6 17L9 13.4L5.4 17L4 15.6L7.6 12L4 8.39999L5.4 6.99999L9 10.6L12.6 6.99999L14 8.39999L10.4 12ZM19.3123 8.67399L20.3805 7.52749C20.5765 7.32608 20.7514 7.1201 20.9173 6.91869C21.077 6.72452 21.2214 6.51823 21.3493 6.30169C21.469 6.10152 21.567 5.8892 21.6418 5.66829C21.7128 5.45337 21.7488 5.22843 21.7484 5.00208C21.7514 4.72071 21.6994 4.44146 21.5953 4.18002C21.4968 3.93428 21.3427 3.71468 21.1451 3.53842C20.9353 3.35487 20.6899 3.21651 20.4242 3.13196C19.7861 2.94191 19.1044 2.95753 18.4757 3.17661C18.1887 3.28506 17.9282 3.45381 17.712 3.67148C17.5032 3.88006 17.3413 4.13081 17.2372 4.40696C17.1371 4.67345 17.0844 4.95534 17.0813 5.23996L17.0777 5.47696H18.617L18.6234 5.24999C18.625 5.12333 18.643 4.99741 18.6772 4.87541C18.7105 4.76834 18.7637 4.66848 18.8339 4.58104C18.905 4.50068 18.9935 4.43769 19.0928 4.39694C19.3173 4.30795 19.5665 4.30277 19.7946 4.38236C19.8768 4.41844 19.9501 4.47194 20.0096 4.53915C20.0704 4.61089 20.1171 4.69344 20.1473 4.78248C20.1829 4.89072 20.2014 5.00389 20.202 5.11786C20.2008 5.20745 20.1901 5.29667 20.17 5.38398C20.1409 5.48826 20.0993 5.58863 20.046 5.68291C19.9687 5.81912 19.8807 5.94894 19.7827 6.07114C19.6483 6.24579 19.505 6.4134 19.3534 6.57331L17.1971 8.92641V9.99999H22V8.67399H19.3123Z",
  "tt-format-font-style": "M16 19H18L13 5H11L6 19H8L9.43 15H14.57L16 19ZM10.14 13L12 7.8L13.86 13H10.14Z",
  "tt-format-font-size": "M20.75 19H22.25L19.25 9H17.75L14.75 19H16.25L17 16.5H20L20.75 19ZM17.45 15L18.5 11.5L19.55 15H17.45ZM11.75 19H13.75L8.75 5H6.75L1.75 19H3.75L5.18 15H10.32L11.75 19ZM5.89 13L7.75 7.8L9.61 13H5.89Z",
  "tt-format-more": "M13.55 19H15.55L10.55 5H8.55005L3.55005 19H5.55005L6.95005 15H12.05L13.55 19ZM7.65005 13L9.55005 7.8L11.45 13H7.65005ZM20.4501 17.5C20.4501 17.7967 20.3621 18.0867 20.1973 18.3334C20.0324 18.58 19.7982 18.7723 19.5241 18.8858C19.25 18.9993 18.9484 19.0291 18.6574 18.9712C18.3664 18.9133 18.0992 18.7704 17.8894 18.5607C17.6796 18.3509 17.5367 18.0836 17.4789 17.7926C17.421 17.5017 17.4507 17.2001 17.5642 16.926C17.6778 16.6519 17.87 16.4176 18.1167 16.2528C18.3634 16.088 18.6534 16 18.95 16C19.3479 16 19.7294 16.158 20.0107 16.4393C20.292 16.7206 20.4501 17.1022 20.4501 17.5ZM20.4501 13.5C20.4501 13.7967 20.3621 14.0867 20.1973 14.3334C20.0324 14.58 19.7982 14.7723 19.5241 14.8858C19.25 14.9994 18.9484 15.0291 18.6574 14.9712C18.3664 14.9133 18.0992 14.7704 17.8894 14.5607C17.6796 14.3509 17.5367 14.0836 17.4789 13.7926C17.421 13.5017 17.4507 13.2001 17.5642 12.926C17.6778 12.6519 17.87 12.4176 18.1167 12.2528C18.3634 12.088 18.6534 12 18.95 12C19.3479 12 19.7294 12.158 20.0107 12.4393C20.292 12.7206 20.4501 13.1022 20.4501 13.5ZM20.4501 9.5C20.4501 9.79667 20.3621 10.0867 20.1973 10.3334C20.0324 10.58 19.7982 10.7723 19.5241 10.8858C19.25 10.9994 18.9484 11.0291 18.6574 10.9712C18.3664 10.9133 18.0992 10.7704 17.8894 10.5607C17.6796 10.3509 17.5367 10.0836 17.4789 9.79264C17.421 9.50166 17.4507 9.20006 17.5642 8.92597C17.6778 8.65189 17.87 8.41762 18.1167 8.2528C18.3634 8.08797 18.6534 8 18.95 8C19.3479 8 19.7294 8.15804 20.0107 8.43934C20.292 8.72064 20.4501 9.10218 20.4501 9.5Z",
  "tt-action-undo": "M10.4 9.4C8.7 9.7 7.2 10.3 5.8 11.4L3 8.5V15.5H10L7.3 12.8C11 10.2 16.1 11 18.8 14.7C19 15 19.2 15.2 19.3 15.5L21.1 14.6C18.9 10.8 14.7 8.7 10.4 9.4Z",
  "tt-action-redo": "M13.6 9.4C15.3 9.7 16.8 10.3 18.2 11.4L21 8.5V15.5H14L16.7 12.8C13 10.1 7.9 11 5.3 14.7C5.1 15 4.9 15.2 4.8 15.5L3 14.6C5.1 10.8 9.3 8.7 13.6 9.4Z"
}, Y = {
  viewBox: "0 0 24 24",
  class: "tiny-typer-icon",
  role: "img"
}, G = ["d"], F = /* @__PURE__ */ g({
  __name: "TinyTyperIcon",
  props: {
    icon: {},
    size: {},
    color: {}
  },
  setup(r) {
    const i = r, t = H(() => W[`tt-${i.icon}`]);
    return (c, a) => (l(), C("svg", Y, [
      f("path", { d: t.value }, null, 8, G)
    ]));
  }
}), t1 = { key: 0 }, h = /* @__PURE__ */ g({
  __name: "TinyTyperToolbarNavItem",
  props: {
    item: {},
    showLabel: { type: Boolean }
  },
  emits: ["click"],
  setup(r, { emit: i }) {
    const t = r, c = L(document.queryCommandState(t.item.id)), a = i, e = (n) => {
      a("click", n);
    };
    return S(() => {
      const n = () => {
        c.value = document.queryCommandState(t.item.id);
      };
      n();
      const d = new MutationObserver(n);
      d.observe(document.body, {
        attributes: !0,
        subtree: !0
      }), $(() => {
        d.disconnect();
      });
    }), (n, d) => (l(), C("button", {
      class: x(["tiny-typer-toolbar-nav-item-action", { active: c.value }]),
      onClick: e
    }, [
      _(F, {
        size: "medium",
        icon: t.item.icon
      }, null, 8, ["icon"]),
      t.showLabel ? (l(), C("span", t1, U(t.item.name), 1)) : k("", !0)
    ], 2));
  }
}), e1 = { class: "tiny-typer-toolbar" }, n1 = { class: "tiny-typer-toolbar-nav" }, N = /* @__PURE__ */ g({
  __name: "TinyTyperToolbar",
  setup(r) {
    const { getToolBarItems: i, callFunction: t } = E("tinyTyper");
    return (c, a) => (l(), C("div", e1, [
      f("div", n1, [
        (l(!0), C(v, null, Z(s(i), (e) => (l(), C("ul", {
          class: "tiny-typer-toolbar-nav-item",
          key: e.order
        }, [
          (l(!0), C(v, null, Z(e.toolbarItems, (n) => (l(), C("li", {
            key: n.order
          }, [
            _(h, {
              item: n,
              onClick: (d) => s(t)(n.functionName, n.id)
            }, null, 8, ["item", "onClick"])
          ]))), 128))
        ]))), 128))
      ])
    ]));
  }
}), o1 = { class: "tiny-typer-toolbar-nav-item" }, A = /* @__PURE__ */ g({
  __name: "TinyTyperFloatingBar",
  props: {
    config: {}
  },
  setup(r) {
    const { getFloatingToolbarItems: i, callFunction: t } = E("tinyTyper"), c = r;
    return (a, e) => c.config.isSelected ? (l(), C("div", {
      key: 0,
      class: "tiny-typer-floating-bar",
      style: R({ top: c.config.top + "px", left: c.config.left + "px" })
    }, [
      f("ul", o1, [
        (l(!0), C(v, null, Z(s(i).toolbarItems, (n) => (l(), C("li", {
          key: n.order
        }, [
          _(h, {
            item: n,
            onClick: (d) => s(t)(n.functionName, n.id)
          }, null, 8, ["item", "onClick"])
        ]))), 128))
      ])
    ], 4)) : k("", !0);
  }
}), i1 = { class: "tiny-typer-wrapper" }, r1 = ["innerHTML"], c1 = /* @__PURE__ */ f("div", { class: "tiny-typer-footer" }, [
  /* @__PURE__ */ f("span", { class: "tiny-typer-copyright" }, "TinyTyper")
], -1), a1 = /* @__PURE__ */ g({
  __name: "TinyTyperBase",
  emits: ["onInput", "onFocusOut"],
  setup(r, { emit: i }) {
    const t = L(""), c = L(null), a = i, e = Q({ content: t, editorRef: c });
    O("tinyTyper", e);
    const { inputData: n, floatingBarOptions: d } = e, b = () => {
      const T = e.getContent();
      n.value = T, a("onInput", T);
    };
    return (T, u) => (l(), C("div", i1, [
      _(N),
      _(A, { config: s(d) }, null, 8, ["config"]),
      f("div", {
        id: "tinyTyperEditor",
        class: "tiny-typer-content",
        contenteditable: "true",
        onInput: b,
        onKeydown: u[0] || (u[0] = D(z(
          //@ts-ignore
          (...m) => s(e).handleEnterKey && s(e).handleEnterKey(...m),
          ["prevent"]
        ), ["enter"])),
        onMouseup: u[1] || (u[1] = //@ts-ignore
        (...m) => s(e).handleMouseUp && s(e).handleMouseUp(...m)),
        onSelectionchange: u[2] || (u[2] = //@ts-ignore
        (...m) => s(e).updateSelection && s(e).updateSelection(...m)),
        innerHTML: t.value,
        onMousedown: u[3] || (u[3] = //@ts-ignore
        (...m) => s(e).setEditorRef && s(e).setEditorRef(...m))
      }, null, 40, r1),
      c1
    ]));
  }
}), s1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TinyTyperBase: a1,
  TinyTyperFloatingBar: A,
  TinyTyperIcon: F,
  TinyTyperToolbar: N,
  TinyTyperToolbarNavItem: h
}, Symbol.toStringTag, { value: "Module" }));
function l1(r) {
  for (const i in s1)
    (void 0)(i);
}
const m1 = { install: l1 };
export {
  a1 as TinyTyperBase,
  A as TinyTyperFloatingBar,
  F as TinyTyperIcon,
  N as TinyTyperToolbar,
  h as TinyTyperToolbarNavItem,
  m1 as default
};
