import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import { Command } from 'commander';

const program = new Command();
const filePath = path.join(process.cwd(), 'courses.json');

// Command setup
program
    .command('add-course')
    .description('Add a new course with name and price')
    .action(async () => {
        try {
            const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'courseName',
                    message: 'Enter the course name:',
                },
                {
                    type: 'input',
                    name: 'coursePrice',
                    message: 'Enter the course price:',
                    validate: (value) => {
                        const valid = !isNaN(parseFloat(value));
                        return valid || 'Please enter a valid number';
                    },
                },
            ]);

            const newCourse = {
                name: answers.courseName,
                price: parseFloat(answers.coursePrice),
            };

            let courses = [];
            if (fs.existsSync(filePath)) {
                try {
                    const fileData = fs.readFileSync(filePath, 'utf8');
                    courses = JSON.parse(fileData);
                } catch (parseError) {
                    console.error('Error: Failed to parse courses.json. The file might be corrupted.');
                    process.exit(1); // Exit the process with an error code
                }
            }
            courses.push(newCourse);

            try {
                fs.writeFileSync(filePath, JSON.stringify(courses, null, 2));
                console.log('Course added successfully!');
            } catch (writeError) {
                console.error('Error: Failed to write to courses.json. Please check file permissions.');
                process.exit(1); // Exit the process with an error code
            }
        } catch (error) {
            console.error('Unexpected Error:', error);
            process.exit(1); // Exit the process with an error code
        }
    });

program.parse(process.argv);
