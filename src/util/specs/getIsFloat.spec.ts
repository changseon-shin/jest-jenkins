import {getIsFloat} from "../numberValidation";

describe('소숫점이 있는지 알 수 있다.', () => {
    test.each([
        [-1.5, true],
        ['0.5', true],
        [0, false],
        [10, false],
        [-1, false],
        [null, false],
        [undefined, false],
        ['10', false]
    ])(`value 가 소숫점이 있는지 알 수 있다.`, (value: any, expected: boolean): void => {
        expect(getIsFloat(value)).toBe(expected);
    });
});