import { Component, OnInit } from '@angular/core';
import { IPicGrid } from 'src/app/common/interfaces';
import assets from '../../common/assets.json';

@Component({
  selector: 'app-naltovning',
  templateUrl: './naltovning.component.html',
  styleUrls: ['./naltovning.component.scss']
})
export class NaltovningComponent implements OnInit {

  tovningar: IPicGrid[] = assets.tovningar;
  constructor() { }

  ngOnInit(): void {
  }

}
