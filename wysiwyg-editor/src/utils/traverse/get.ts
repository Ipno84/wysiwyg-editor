const get = <T = Record<string, any>, R = unknown>(obj: T, path: string | undefined, defaultValue: any = undefined): R => {
    const travel = (regexp: RegExp) =>
        String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce((res, key) => (res !== null && res !== undefined ? (res as any)[key] : res), obj);
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
};

export { get };
