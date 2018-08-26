import { PipeTransform, Pipe } from '@angular/core';

import { Activity } from '../../models/trip.model';
import { ConstantDataService } from '../../../shared/constant-data.service';

@Pipe({
    name: "activitySubtitle"
})
export class ActivitySubtitlePipe implements PipeTransform {

    constructor(private constantDataService: ConstantDataService){}

    transform(value: Activity) {
        const city = this.constantDataService.getCity(value.cityCode);
        if (city) {
            return city.name + ' - ' 
                    + this.constantDataService.getCountry(city.countryCode).name;
        } 

        return '';
    }
}