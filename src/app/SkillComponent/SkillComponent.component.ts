import { Component, OnInit, Input } from '@angular/core';
import { skill } from '../models/skill.model';
@Component({
  selector: 'app-skill',
  templateUrl: './SkillComponent.component.html',
  styleUrls: ['./SkillComponent.component.css'],
})
export class SkillComponentComponent implements OnInit {
  constructor() {}
  @Input() skill!: skill;

  ngOnInit(): void {}
}
