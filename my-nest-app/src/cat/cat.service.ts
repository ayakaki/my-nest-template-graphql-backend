import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  // シードメソッドを追加
  seed() {
    const sampleCat: Cat = {
      id: 1,
      name: 'Sample Cat',
      age: 3,
      breed: 'Abyssinian',
    };
    this.create(sampleCat);
  }
}
