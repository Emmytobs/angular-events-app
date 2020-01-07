import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @Input() closeModalOnClick: string;

  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  closeModal() {
    if (this.closeModalOnClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

  ngOnInit() {
  }

}
