import { Injectable } from '@angular/core';

import { Country, City } from './item.model';

@Injectable()
export class ConstantDataService {


    countries: Country[] = [
        {code: 'pe', name: 'Peru'}
        , {code: 'us', name: 'United States'}
        , {code: 'uk', name: 'United Kingdom'}
        , {code: 'fr', name: 'France'}
        , {code: 'ca', name: 'Canada'}
      ];
    
      cities: City[] = [
        new City('ca-to', 'Toronto', 'ca', 'assets/images/canada/toronto-icon.jpeg')
        , new City('pe-lima', 'Lima', 'pe', 'assets/images/peru/lima-icon.jpeg')
      ];

      getCountries() {
          return this.countries;
      }

      getCities(country: Country) {
        if (country) {
            return this.cities.filter((city: City) => city.countryCode == country.code);
        }
        return [];
      }

      getCity(cityCode: string) {
          return this.cities.find(city => city.code == cityCode);
      }images

      getCountry(countryCode: string) {
          return this.countries.find(country => country.code == countryCode);
      }
}