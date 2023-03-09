const pattern = function (n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0 + i; j < n; j++) {
            process.stdout.write("*")
        }
        process.stdout.write("\n")
    }
}
pattern(5)


const pattern2 = function (n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j + i < n; j++) {
            process.stdout.write("*")
        }
        process.stdout.write("\n")
    }
}
pattern2(5)

const pattern3 = function (n) {
    for (i = n; i > 0; i--) {
        for (j = 0; j < i; j++) {
            process.stdout.write("*")
        }
        process.stdout.write("\n")
    }
}
pattern3(5)
