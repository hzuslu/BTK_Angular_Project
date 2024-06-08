import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {


  async apply() {

    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      Swal.fire({
        icon: 'success',
        title: 'We will contact you as soon as possible',
        confirmButtonText: 'Close',
      })
    }
  }

  jobCards = [
    {
      avatar: 'TM',
      title: 'Software Engineer',
      location: 'San Francisco',
      salary: '$120K - $160K',
      skills: ['JavaScript', 'React', 'Node.js'],
      applyLink: '#'
    },
    {
      avatar: 'GM',
      title: 'Marketing Manager',
      location: 'New York City',
      salary: '$80K - $120K',
      skills: ['Digital Marketing', 'SEO', 'Campaign Management'],
      applyLink: '#'
    },
    {
      avatar: 'AC',
      title: 'Accountant',
      location: 'Chicago',
      salary: '$70K - $90K',
      skills: ['Financial Reporting', 'Tax Compliance', 'Budgeting'],
      applyLink: '#'
    },
    {
      avatar: 'EC',
      title: 'Executive Chef',
      location: 'Los Angeles',
      salary: '$100K - $140K',
      skills: ['Culinary Arts', 'Menu Planning', 'Team Leadership'],
      applyLink: '#'
    },
    {
      avatar: 'ND',
      title: 'Nurse Practitioner',
      location: 'Boston',
      salary: '$90K - $110K',
      skills: ['Patient Care', 'Health Assessment', 'Clinical Skills'],
      applyLink: '#'
    },
    {
      avatar: 'AD',
      title: 'Art Director',
      location: 'Seattle',
      salary: '$90K - $130K',
      skills: ['Graphic Design', 'Creative Direction', 'Typography'],
      applyLink: '#'
    },
    {
      avatar: 'ED',
      title: 'Event Planner',
      location: 'Miami',
      salary: '$70K - $100K',
      skills: ['Event Coordination', 'Vendor Management', 'Budget Management'],
      applyLink: '#'
    }
  ];

}
