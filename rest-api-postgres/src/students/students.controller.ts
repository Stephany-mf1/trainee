import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './student.entity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    findStudents():Promise<Student[]> {
        return this.studentsService.findStudents();
    }

    // POST /students
    @Post()
    createStudent(@Body() createStudentDto:CreateStudentDto):Promise<Student> {
        return this.studentsService.createStudent(createStudentDto);
    }

    // PUT /students/1
    @Put(':id')
    updateStudentById(@Param('id') id:string, @Body() createStudentDto:CreateStudentDto):Promise<UpdateResult> {
        return this.studentsService.updateStudentById(id, createStudentDto);
    }

    // DELETE /students/1
    @Delete(':id')
    deleteStudentById(@Param('id') id:string):Promise<DeleteResult> {
        return this.studentsService.deleteStudentById(id);
    }

}
