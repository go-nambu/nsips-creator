import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pharmacyColumnsDefinition } from 'src/const';

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
    const orderedCsv = pharmacyColumnsDefinition
      .map((x) => x.name)
      .map((x) => this.formState[x])
      .join(',');
    const csvBlob = new Blob([orderedCsv], { type: 'text/csv' });
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
