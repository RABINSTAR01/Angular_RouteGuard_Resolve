import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  data: any;

  
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data['data'];
    console.log(this.data); // <-- Check that the resolved data is logged in the console
  }

}
