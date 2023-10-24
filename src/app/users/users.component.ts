import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  pickedDate: any;

  constructor(private datePipe: DatePipe) {}

  readDate() {
    if (!this.pickedDate) console.log("ERROR");
    console.log("Chosen Date:", this.datePipe.transform(this.pickedDate, 'MM-dd-yyyy'));
  }
}
