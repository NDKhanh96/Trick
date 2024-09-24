/**
 * Mở rộng interface của Promise để thêm phương thức toSafe
 * Nếu dùng ts-node thì cần thêm ts-node --files để nhận diện tất cả các file .d.ts
 */
interface Promise<T> {
    /**
     * Xử lý ngoại lệ cho Promise mà không dùng try catch.
     * Đầu ra là 1 mảng gồm 2 phần tử: error và result.
     * Phần tử vị trí 0 là error, vị trí 1 là result.
     * Do unknown bao gồm cả null nên:
     *  - Nếu result là truthy thì error sẽ là null.
     *  - Nhưng nếu error là truthy thì chưa chắc result sẽ là null.
     */
    toSafe(): Promise<[unknown, null] | [null, T]>;
}

/**
 * Mở rộng interface của Function để thêm phương thức toSafe
 * Nếu dùng ts-node thì cần thêm ts-node --files để nhận diện tất cả các file .d.ts
 */
interface Function {
    /**
     * Xử lý ngoại lệ cho Function không có try catch.
     * Đầu ra là 1 mảng gồm 2 phần tử: error và result.
     * Phần tử vị trí 0 là error, vị trí 1 là result.
     * Do unknown bao gồm cả null nên:
     *  - Nếu result là truthy thì error sẽ là null.
     *  - Nhưng nếu error là truthy thì chưa chắc result sẽ là null.
     */
    toSafe<T>(...args: unknown[]): [unknown, null] | [null, T];
}
