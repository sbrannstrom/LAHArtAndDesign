import { Component, OnInit } from '@angular/core';
import { IAssets, IPicGrid } from 'src/app/common/interfaces';
import assets from '../../common/assets.json';

@Component({
  selector: 'app-malningar',
  templateUrl: './malningar.component.html',
  styleUrls: ['./malningar.component.scss']
})
export class MalningarComponent implements OnInit {

  paintings: IPicGrid[] = assets.paintings;
  constructor() { }

  ngOnInit(): void {
  }

}
