import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { MatIcon } from '@angular/material/icon'
import { MatButton, MatIconButton } from '@angular/material/button'

@Component({
  selector: 'app-header-actions',
  imports: [MatButton, MatIconButton, MatIcon, RouterLink],
  templateUrl: './actions.html',
  styles: ``,
})
export class Actions {}
