import { Controller, Get } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    findStudents():Promise<Student[]> {
        return this.studentsService.findStudents();
    }
}
