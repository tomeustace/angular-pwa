import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-serviceworker-config',
  templateUrl: './serviceworker-config.component.html',
  styleUrls: ['./serviceworker-config.component.scss']
})
export class ServiceworkerConfigComponent implements OnInit {

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

}
