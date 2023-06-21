const setError = element => element.innerText = 'Input Error!';

const displayTimes = () => {
    const number = document.getElementById('number').value;
    const Number = parseInt(number);
    const timesResult = document.getElementById('times-result');

    if (Number < 1 || Number > 9)
        return setError(timesResult);
    if (!isFinite(Number) || isNaN(Number))
        return setError(timesResult);
    if (Number != number)
        return setError(timesResult);

    const result = [];

    for (let i = 1; i <= 9; i++) {
        result.push(Number + ' x ' + i + ' = ' + Number * i);
    }

    timesResult.innerText = result.join('\n');
};
