import { Component, OnInit } from '@angular/core';
import { pharmacyColumnsDefinition } from 'src/const';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss'],
})
export class PharmacyComponent implements OnInit {
  displayItems = pharmacyColumnsDefinition.filter((x) => x.display);
  constructor() {}

  ngOnInit(): void {}
}
