/**
 * Xử lý ngoại lệ cho Function mà không cần try catch
 */

Function.prototype.toSafe = function <T>(...args: unknown[]): [unknown, null] | [null, T] {
    try {
        const result: T = this(...args);
        return [null, result];
    } catch (error: unknown) {
        return [error, null];
    }
};

/**
 * Xử lý ngoại lệ cho Promise mà không cần try catch
 */

Promise.prototype.toSafe = async function <T>(): Promise<[unknown, null] | [null, T]> {
    try {
        const result: T = await this;
        return [null, result];
    } catch (error: unknown) {
        return [error, null];
    }
};
