import { Component } from '@angular/core';
import { SigninComponent } from "../signin/signin.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SigninComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  submitted: boolean = false;

  setSubmitted(status: boolean) {
    this.submitted = status;
  }
}
