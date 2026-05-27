import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentService } from '../../core/service/student.service';
import { Student } from '../../core/models/student.model';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './viewAll.component.html'
})
export class ViewAllComponent implements OnInit {

  students: Student[] = [];
  error: string | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAll().subscribe({
      next: (data) => this.students = data,
      error: () => this.error = 'Error loading students'
    });
  }
}