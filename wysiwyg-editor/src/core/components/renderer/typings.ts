interface Leaf {
    uuid?: string;
    name?: string;
    props?: Record<string, any>;
    children?: Tree;
}

type Tree = (Leaf | string)[];

interface RendererProps {
    treeName?: string;
    tree?: Tree | null;
    leaf?: Leaf | string | null;
    parentPath?: string;
}

export type { Tree, Leaf, RendererProps };
