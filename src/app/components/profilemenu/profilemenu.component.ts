import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profilemenu',
  templateUrl: './profilemenu.component.html',
  styleUrls: ['./profilemenu.component.scss']
})
export class ProfilemenuComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() showBackdrop: boolean = false;
  @Output() showBackdropChange = new EventEmitter();
  @Output() visibleChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  close() {
    this.visible = false;
    setTimeout(() => {
      this.showBackdrop = false;
      this.showBackdropChange.emit(false);
      this.visibleChange.emit(false);
    }, 500);
  }

  clickOutside(e: any) {
    const outside = document.getElementById('outside');
    if (e.target === outside) {
      this.close();
    }
  }
}
