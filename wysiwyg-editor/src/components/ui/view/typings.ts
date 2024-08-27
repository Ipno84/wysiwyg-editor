interface BaseViewProps {
    $relative?: boolean;
    $absolute?: boolean;
    $marginTop?: number;
    $marginRight?: number;
    $marginBottom?: number;
    $marginLeft?: number;
    $paddingTop?: number;
    $paddingRight?: number;
    $paddingBottom?: number;
    $paddingLeft?: number;
    $top?: number;
    $right?: number;
    $bottom?: number;
    $left?: number;
    $zIndex?: number;
    $transform?: string;
    $fitHeight?: boolean;
    $fitScreen?: boolean;
    $backgroundColor?: string;
    $isFlex?: boolean;
    $centerVertically?: boolean;
    $scrollableX?: boolean;
    $scrollableY?: boolean;
}

interface ViewProps extends BaseViewProps {
    $breakpoints?: Record<number, BaseViewProps>;
}

export type { ViewProps, BaseViewProps };
