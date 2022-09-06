import { Component, OnInit } from '@angular/core';
import { IPicGrid } from 'src/app/common/interfaces';
import assets from '../../common/assets.json';

@Component({
  selector: 'app-blandat',
  templateUrl: './blandat.component.html',
  styleUrls: ['./blandat.component.scss']
})
export class BlandatComponent implements OnInit {

  blandat: IPicGrid[] = assets.blandat;
  constructor() { }

  ngOnInit(): void {
  }

}
