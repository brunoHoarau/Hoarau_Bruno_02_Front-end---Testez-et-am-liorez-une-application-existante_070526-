import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../core/service/student.service';
import { Student } from '../../core/models/student.model';

@Component({
  selector: 'app-view-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewOne.component.html'
})
export class ViewOneComponent implements OnInit {

  student: Student | undefined;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getById(id).subscribe({
      next: (data) => this.student = data,
      error: () => this.error = 'Student not found'
    });
  }
}