import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
})
export class ChangeDetectionComponent implements OnInit {
  public text: any;
  constructor(private cf: ChangeDetectorRef) {}

  ngOnInit() {
    this.cf.detach();
  }

  reattach() {
    this.cf.detectChanges();
  }
}
