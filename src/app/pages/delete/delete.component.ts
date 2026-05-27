import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../core/service/student.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit {

  id!: number;

  loading = false;
  error: string | null = null;
  success = false;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
  const param = this.route.snapshot.paramMap.get('id');

  if (param) {
    this.id = +param;

    const confirmDelete = confirm("Are you sure you want to delete this student?");
    
    if (confirmDelete) {
      this.deleteStudent();
    } else {
      this.router.navigate(['/student']);
    }

  } else {
    this.error = "Invalid student ID";
  }
}

  deleteStudent(): void {
  this.loading = true;
  this.error = null;

  this.studentService.delete(this.id).subscribe({
    next: () => {
      this.success = true;
      this.loading = false;

      setTimeout(() => {
        this.router.navigate(['/student']);
      }, 1000);
    },

    error: () => {
      this.error = "Delete failed";
      this.loading = false;
    }
  });
}
}