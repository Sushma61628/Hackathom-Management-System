

import { Component } from '@angular/core';

@Component({
  selector: 'app-mentor-registration',
  templateUrl: './mentor-registration.component.html',
  styleUrls: ['./mentor-registration.component.css']
})
export class MentorRegistrationComponent {
  mentorData: any = {};
  
  submitForm() {
    // Basic form validation check
    if (this.validateForm()) {
      // Assuming you want to send the mentorData to a server, you can make an HTTP POST request here
      // You can use Angular's HttpClient module to make the HTTP request to your server
  
      // For now, let's log the data to the console as an example
      console.log('Mentor data submitted:', this.mentorData);
  
      // Clear the form data after submission
      this.mentorData = {};
    }
  }
  
  validateForm(): boolean {
    // Add validation logic here
    // For example, you can check if required fields are filled out
    // and implement more complex validation as needed
    if (!this.mentorData.name || !this.mentorData.email) {
      console.log('Validation error: Name and Email are required.');
      return false;
    }
  
    // Add more validation checks if needed
  
    return true; // Form is valid
  }
}  