import { Ref } from "vue";
import type { ComputedRef } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    item: {
        type: ObjectConstructor;
        required: true;
    };
    showLabel: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    isFormatActive: (format: string) => boolean;
    props: any;
    isActive: Ref<boolean>;
    emit: (event: "click", ...args: any[]) => void;
    onClick: (data: Event) => void;
    TinyTyperIcon: import("vue").DefineComponent<{
        icon: {
            type: StringConstructor;
            required: true;
        };
        size: {
            type: StringConstructor;
            required: true;
        };
        color: {
            type: StringConstructor;
            required: false;
        };
    }, {
        props: any;
        getPath: ComputedRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            required: true;
        };
        size: {
            type: StringConstructor;
            required: true;
        };
        color: {
            type: StringConstructor;
            required: false;
        };
    }>>, {}, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: ObjectConstructor;
        required: true;
    };
    showLabel: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    showLabel: boolean;
}, {}>;
export default _sfc_main;