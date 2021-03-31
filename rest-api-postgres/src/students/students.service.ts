import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
