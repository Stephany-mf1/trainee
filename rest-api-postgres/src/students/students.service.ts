import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentsRepository: Repository<Student>,
      ) {}

    async findStudents(): Promise<Student[]> {
        return this.studentsRepository.find();
    }

    createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
        const entity:Student = new Student();
        entity.course = createStudentDto.course;
        entity.grade = createStudentDto.grade;
        entity.name = createStudentDto.name;
        return this.studentsRepository.save(entity);
    }

    updateStudentById(id: string, createStudentDto: CreateStudentDto): Promise<UpdateResult> {
        const entity:Student = new Student();
        entity.course = createStudentDto.course;
        entity.grade = createStudentDto.grade;
        entity.name = createStudentDto.name;
        return this.studentsRepository.update(id, entity);
    }

    deleteStudentById(id: string):Promise<DeleteResult> {
        return this.studentsRepository.delete(id);
    }   
}