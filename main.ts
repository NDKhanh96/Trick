/**
 * Cần import file này tại entry như main.ts hoặc index.ts của dự án để dùng được phương thức toSafe
 */
import './globalFunctionExtensions';

/**
 * Promise handler
 */

const demoCallApi = async (): Promise<void> => {
    const [error, result]: [unknown, null] | [null, Response] = await fetch('https://cat-fact.herokuapp.com/facts').toSafe();
    if (!result) {
        if (error instanceof Error) {
            console.error(error.message);
        }

        return;
    }

    const data = result.json();
    const [errorData, resultData] = await data.toSafe();

    if (!resultData) {
        if (errorData instanceof Error) {
            console.error(errorData.message);
        }

        return;
    }

    console.log(resultData);
}

demoCallApi();

/**
 * Function handler
 */

const demoFunction = (a: number, b: number): number => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
};

const [error, result] = demoFunction.toSafe(4, 16);

if (error) {
    if (error instanceof Error) console.log(error.message);
} else {
    console.log(result);
}

