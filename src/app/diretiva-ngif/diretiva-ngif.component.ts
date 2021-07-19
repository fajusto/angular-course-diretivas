import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  courses: string[] = ['Angular 2'];

  showCourses: boolean = false;

  onShowCourses() {
    this.showCourses = !this.showCourses;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
