import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Item } from '../item.model';
import { ImageService } from '../../shared/image.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input("item") item : Item;
  @ViewChild("itemImage") itemImage;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService
      .getImageRefPromise(this.item)
      .then((url: string) => {
        this.itemImage.nativeElement.src = url;
      });
  }

}
