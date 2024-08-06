function run(student_list) {
    let single_student_number = 0;

    for (const student of student_list) {
        single_student_number ^= student;
    }

    return single_student_number;
}

// Example usage
console.log(run([2, 4, 5, 4, 2])); // Output: 5
