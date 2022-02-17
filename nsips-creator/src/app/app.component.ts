import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { pharmacyColumnsDefinition, patientColumnsDefinition } from 'src/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nsips-creator';
  formState: any;
  constructor(private store: Store<{ formState: any }>) {
    this.store.select('formState').subscribe((state) => {
      this.formState = state;
    });
  }

  downloadCsv() {
    const pharmacyOrderedRow = pharmacyColumnsDefinition
      .map((x) => this.formState[x.name])
      .join(',');
    const patientOrderedRow = patientColumnsDefinition
      .map((x) => this.formState[x.name])
      .join(',');
    const csvBlob = new Blob([`${pharmacyOrderedRow}\n${patientOrderedRow}`], {
      type: 'text/csv',
    });
    const url = window.URL.createObjectURL(csvBlob);

    const title = 'nsips_data';
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = title;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
