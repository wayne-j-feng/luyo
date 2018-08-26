import { Component, OnInit } from '@angular/core';

import { FoodType } from '../models/food.type';

@Component({
  selector: 'app-new-foods',
  templateUrl: './new-foods.component.html',
  styleUrls: ['./new-foods.component.css']
})
export class NewFoodsComponent implements OnInit {

  value: string;
  
  foodTypes: FoodType[] = [
    {value: 'Vegetable', viewValue: 'Vegetable'},
    {value: 'Fruit', viewValue: 'Fruit'},
    {value: 'Rice', viewValue: 'Rice'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
