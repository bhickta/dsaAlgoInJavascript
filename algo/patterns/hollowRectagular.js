const pattern = function (row, col) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (j == 0 || j == col - 1 || i == 0 || i == row - 1) { process.stdout.write("*") }
            else { process.stdout.write(" ") }
        }
        process.stdout.write("\n")
    }
}
pattern(12, 8)