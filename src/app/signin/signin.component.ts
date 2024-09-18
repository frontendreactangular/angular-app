import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SigninService } from './services/SigninService';
import { OnBlurTriggerValidationDirective } from '../utils/directives/on-blur-trigger-validation.directive';
import { ListElementsDirective } from '../utils/directives/list-elements.directive';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, OnBlurTriggerValidationDirective, ListElementsDirective],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers: [SigninService]
})
export class SigninComponent {
  emailRegExp: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  emailErrors: Array<string> = [];
  phoneRegExp: RegExp = new RegExp(/^(\d{2})(\d{9})$/);
  phoneErrors: Array<string> = [];
  
  @Input() email: string = '';
  @Input() phone: string = '';

  @Output() submittedControl = new EventEmitter<boolean>();

  constructor(private svc: SigninService) {}

  signIn() {
    const result = this.svc.signIn({email: this.email, phone: this.phone});
    console.log(result);
    this.submittedControl.emit(true);
  }
}
