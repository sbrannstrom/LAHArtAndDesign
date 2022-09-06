import { Component, Input, OnInit } from '@angular/core';
import { IPicGrid } from 'src/app/common/interfaces';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() grid: IPicGrid[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
