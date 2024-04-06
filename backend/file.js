const { executeCpp } = require("./codeExecution/cpp");
const { executePy } = require("./codeExecution/py");
const { executeC } = require("./codeExecution/c");
const { executeRust } = require("./codeExecution/rust");
const { executeGolang } = require("./codeExecution/golang");
const { executeJs } = require("./codeExecution/javascript");
const { executeTs } = require("./codeExecution/typescript");

const cppCode = `
#include <bits/stdc++.h>
using namespace std;

unsigned long long fibonacci(int n) {
    if (n <= 1) {
        return n;
    }

    unsigned long long prev = 0, curr = 1, next;

    for (int i = 2; i <= n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

int main() {
    int n;
    cin >> n;

    unsigned long long result = fibonacci(n);
    cout << "Fibonacci(" << n << ") = " << result << endl;

    return 0;
} 
`;

const pyCode = `
def fibo_memo(n, memo={}):
  if n in memo:
    return memo[n]
  if n <= 1:
    memo[n] = n
  else:
    memo[n] = fibo_memo(n-1, memo) + fibo_memo(n-2, memo)
  return memo[n]

n = int(input())  # Read input from stdin
print(fibo_memo(n))  # Output to stdout
`;

const cCode = `
#include <stdio.h>

unsigned long long fibonacci(int n) {
    if (n <= 1) {
        return n;
    }

    unsigned long long prev = 0, curr = 1, next;

    for (int i = 2; i <= n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    unsigned long long result = fibonacci(n);
    printf("Fibonacci(%d) = %llu\\n", n, result);

    return 0;
}
`;

const rustCode = `
use std::io;

fn fibonacci(n: u32) -> u128 {
    if n <= 1 {
        return n as u128;
    }

    let mut prev: u128 = 0;
    let mut curr: u128 = 1;

    for _ in 2..=n {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    curr
}

fn main() {
    println!("Enter a number:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");
    let n: u32 = input.trim().parse().expect("Invalid input");

    let result = fibonacci(n);
    println!("Fibonacci({}) = {}", n, result);
}
`;

const goCode = `
package main

import (
	"fmt"
	"os"
	"strconv"
)

func fibonacci(n int) uint64 {
	if n <= 1 {
		return uint64(n)
	}

	var prev, curr uint64 = 0, 1

	for i := 2; i <= n; i++ {
		prev, curr = curr, prev+curr
	}

	return curr
}

func main() {
	args := os.Args[1:] // Get command line arguments excluding the program name
	if len(args) != 1 {
		fmt.Println("Usage: go run fibonacci.go <number>")
		return
	}

	num, err := strconv.Atoi(args[0])
	if err != nil {
		fmt.Println("Invalid input:", err)
		return
	}

	result := fibonacci(num)
	fmt.Printf("Fibonacci(%d) = %d", num, result)
}
`;

const jsCode = `
const readline = require('readline');

const fibonacci = n => {
    if (n <= 1) {
        return n;
    }

    let prev = 0, curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (answer) => {
    const n = parseInt(answer);
    console.log("Fibonacci(" + n + ") = " + fibonacci(n));
    rl.close();
});
`;

const tsCode = `
import readline from 'readline';

const fibonacci = (n: number): number => {
    if (n <= 1) {
        return n;
    }

    let prev = 0, curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
} 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (answer) => {
    const n = parseInt(answer);
    console.log("Fibonacci(" + n + ") = " + fibonacci(n));
    rl.close();
});
`;
// const inputData = "30"; // Input data as a string

// executeCpp(cppCode, inputData)
//  .then((output) => {
//    console.log("Output:", output);
//  })
//  .catch((error) => {
//    console.error("Error:", error);
//  });

// executeC(cCode, inputData)
//   .then(output => {
//     console.log('Output:', output);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// executePy('python', pyCode, inputData)
//   .then(output => {
//     console.log('Output:', output);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// executeRust('rust', rustCode, inputData)
//   .then(output => {
//     console.log('Output:', output);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// executeGolang('go', goCode, inputData)
//   .then(output => {
//     console.log('Output:', output);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// executeJs('js', jsCode, inputData)
//  .then(output => {
//    console.log('Output:', output);
//  })
//  .catch(error => {
//    console.error('Error:', error);
//  });

// executeTs('ts', tsCode, inputData)
//   .then(output => {
//     console.log('Output:', output);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
