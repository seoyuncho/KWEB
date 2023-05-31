const getDivisors = num => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num === i * i)
            divisors.push(i);
        else if (num % i === 0)
            divisors.push(i, num / i);
    }
    return divisors.sort((first, second) => first - second);
};