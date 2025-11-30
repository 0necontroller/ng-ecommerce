import { Component } from '@angular/core';
import { CategoryList } from '../../components/category/category-list/category-list';

@Component({
  selector: 'app-home',
  imports: [CategoryList],
  templateUrl: './home.html',
  styles: ``,
})
export default class Home {

}
