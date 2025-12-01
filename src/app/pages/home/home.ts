import { Component } from '@angular/core';
import { HomeSection } from '../../components/products/home-section/home-section';
import { CategoryList } from '../../components/category/category-list/category-list';

@Component({
  selector: 'app-home',
  imports: [CategoryList,HomeSection],
  templateUrl: './home.html',
  styles: ``,
})
export default class Home {

}
