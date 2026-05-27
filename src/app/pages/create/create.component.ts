import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginRequest } from "../../core/models/Login-request.model";
import { CommonModule } from "@angular/common";
import { StudentService } from "../../core/service/student.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
	imports: [CommonModule ,FormsModule],
  templateUrl: './create.component.html'
})
export class CreateComponent{

	firstName = "";
	lastName = "";
	email = "";

	error: string | null = null;
  success = false;
  loading = false;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.error = null;
    this.success = false;
    this.loading = true;

    const student = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };

    this.studentService.create(student).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;

        // reset form
        this.firstName = "";
        this.lastName = "";
        this.email = "";

        // redirection optionnelle
        this.router.navigate(['/student']);
      },
      error: (err: any) => {
        this.error = "Erreur lors de la création de l'étudiant";
        this.loading = false;
      }
    });
  }
}