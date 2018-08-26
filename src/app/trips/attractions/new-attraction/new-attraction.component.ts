import { Component, OnInit } from '@angular/core';

import { Country, City } from '../../../shared/item.model';
import { ConstantDataService } from '../../../shared/constant-data.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-new-attraction',
  templateUrl: './new-attraction.component.html',
  styleUrls: ['./new-attraction.component.css']
})
export class NewAttractionComponent implements OnInit {

  countryOptions: Country[];
  cityOptions: City[];
  selectedCountry: Country;
  selectedCity: City;

  constructor(private constantDataService: ConstantDataService) {}

  ngOnInit() {
    this.countryOptions = this.constantDataService.getCountries();
  }

  selectCountry(event: MatSelectChange) {
    const country: Country = event.value;
    this.cityOptions = this.constantDataService.getCities(country);
  }

}
