import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-clue10',
  templateUrl: './clue10.component.html',
  styleUrls: ['./clue10.component.css']
})
export class Clue10Component implements OnInit {
public path;
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.paramMap.get('id1');
  }

}
