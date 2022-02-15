console.clear()
const sentence = "hello there from lighthouse labs";
timeout = 50
for (const char of sentence) {
  timeout += 50
  setTimeout(() => process.stdout.write(char), timeout)
}