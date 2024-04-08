#!/usr/bin/node
/*
  Print a square with the character #

  The size of the square must be the first argument
  of the program.
*/

if (process.argv.length <= 2) {
  process.stderr.write("Missing argument\n");
  process.stderr.write("Usage: ./1-print_square.js <size>\n");
  process.stderr.write("Example: ./1-print_square.js 8\n");
  process.exit(1);
}

const size = parseInt(process.argv[2], 10); // Fix: Use radix 10

for (let i = 0; i < size; i++) {
  let row = ""; // Build each row as a string
  for (let j = 0; j < size; j++) {
    row += "#";
  }
  console.log(row); // Use console.log for better output handling
}
