const OPERATIONS = {
    sum: '+',
    multiply: '*',
    subscract: '-',
    divide: '/'
};

function calculate({a, b, operation }) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a,b);
            break;
        case OPERATIONS.subscract:
            result = subscract(a, b);
            break;
        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;
        case OPERATIONS.divide:
            result = divide(a, b);
            break;

        default:
            break;
    }
    return result;
}