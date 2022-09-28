import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-serviceworker-push',
  templateUrl: './serviceworker-push.component.html',
  styleUrls: ['./serviceworker-push.component.scss']
})
export class ServiceworkerPushComponent implements OnInit {

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

}
