import { Component } from '@angular/core';
import { SigninComponent } from "../signin/signin.component";
import { User } from '../signin/models/User';
import { JsonPipe } from '@angular/common';
import { SensitiveDataPipe } from '../utils/pipes/SensitiveDataPipe';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SigninComponent, JsonPipe, SensitiveDataPipe],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  submitted: User | null = null;

  setSubmitted(record: User | null) {
    this.submitted = record;
  }
}
