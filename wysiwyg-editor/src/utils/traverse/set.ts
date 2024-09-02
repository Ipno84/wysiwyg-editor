const set = <T extends object>(obj: T, path: string | string[], value: any): T => {
    const pathArray = Array.isArray(path) ? path : path.split(/[,[\].]+?/).filter(Boolean);

    if (pathArray.length === 0) return value;

    const [key, ...restPath] = pathArray;

    const index = isNaN(Number(key)) ? key : Number(key);

    return {
        ...obj,
        [index]: set((obj as any)[index] ?? {}, restPath, value),
    };
};

export { set };
