import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NameTrackerService } from '../core/name-tracker.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  changes: Observable<any[]>;

  constructor(private changeService: NameTrackerService) { }

  ngOnInit() {
    this.changes = this.changeService.getData();
  }

}
