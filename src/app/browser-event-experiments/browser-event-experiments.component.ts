import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

  public hoverEvent: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverEvent = document.getElementById('hover');
    this.hoverEvent.addEventListener('mousemove', this.mouseEvento);
  }

  public mouseEvento(ev: MouseEvent) {
    console.log(ev);
  }

  public unsubscribe() {
    console.log('tirando inscrição do evento mouseMove');
    this.hoverEvent.removeEventListener('mousemove', this.mouseEvento);
  }
}
