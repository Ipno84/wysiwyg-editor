interface BaseFlexItemProps {
    $flex?: number;
    $width?: number;
}

interface FlexItemProps extends BaseFlexItemProps {
    $breakpoints?: Record<number, BaseFlexItemProps>;
}

export type { FlexItemProps, BaseFlexItemProps };
