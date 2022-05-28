import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll() {
    return 'This is items service';
  }
  create(item: Item): Item {
    console.log(item);
    this.items.push(item);
    return item;
  }
}
