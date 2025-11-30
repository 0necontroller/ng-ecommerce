import { Component } from '@angular/core'
import { Actions } from '../actions/actions'
import { MatToolbar } from '@angular/material/toolbar'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [MatToolbar, Actions, RouterLink],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {}
