function fibonacci(numero) {
    const fib = [0, 1];

    for(let i = 2; i < numero; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib
}

const fibSerie = fibonacci(10);
console.log(fibSerie);