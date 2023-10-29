import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent {
  formData: any = {};
  

  submitForm(form: NgForm) {
    if (form.valid) {
      // Form is valid, proceed with submission
      console.log('Form data submitted:', this.formData);
      this.resetForm(form);
    } else {
      // Form is invalid, show validation errors
      console.log('Form is invalid. Please correct the errors.');
    }
  }

  resetForm(form: NgForm) {
    // Reset the form and the form data
    form.resetForm();
    this.formData = {};
  }
}
 