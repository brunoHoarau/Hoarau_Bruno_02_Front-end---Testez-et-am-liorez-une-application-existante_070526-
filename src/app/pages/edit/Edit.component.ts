import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../core/service/student.service';
import { Student } from '../../core/models/student.model';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  student: Student = {
    firstName: '',
    lastName: '',
    email: ''
  };

  id!: number;

  error: string | null = null;
  success = false;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getById(this.id).subscribe({
      next: (data: any) => this.student = data,
      error: () => this.error = 'Student not found'
    });
  }

  onSubmit(): void {
    this.studentService.update(this.id, {
			firstName: this.student.firstName,
			lastName: this.student.lastName,
			email: this.student.email
		}).subscribe({
      next: () => {
        this.success = true;

        setTimeout(() => {
          this.router.navigate(['/student']);
        }, 1000);
      },
      error: () => this.error = 'Update failed'
    });
  }
}