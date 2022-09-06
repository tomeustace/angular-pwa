import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-add-pwa',
  templateUrl: './add-pwa.component.html',
  styleUrls: ['./add-pwa.component.scss']
})
export class AddPWAComponent implements OnInit, AfterViewInit {

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }
}
