import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

import { AisecService } from '../_shared/aisec.service';

@Component({
  selector: 'app-aisec-data',
  templateUrl: './aisec-data.component.html',
  styleUrls: ['./aisec-data.component.css'],
  providers: [AisecService]
})
export class AisecDataComponent implements OnInit {
  data: any;
  skills: any[];
  backgrounds: any[];
  editable: boolean;
  actionButton: string;

  backgroundsModel: number[];
  skillsModel: number[];
  myOptions: IMultiSelectOption[];

  constructor(private aisecServ: AisecService) {
    this.editable = false;
    this.actionButton = 'Edit';
  }

  ngOnInit() {

    this.aisecServ.getOppData()
      .subscribe(data => {
        this.data = data;

        this.aisecServ.getSkillsData()
          .subscribe(data => {
            this.skills = data;
          }
          )

        this.aisecServ.getBackgroundsData()
          .subscribe(data => {
            this.backgrounds = data;
          }
          )
      }
      )
  }

  callPatchService() {
    if (this.editable) {
      this.editable = !this.editable;
      this.actionButton = 'Edit';
      this.aisecServ.getPatchService(this.data)
        .subscribe(
        result => console.log(result),
        error => console.log(error)
        )
    } else {
      this.editable = !this.editable;
      this.actionButton = 'Save';
    }
  }

  onChange() {
    let skillsArr = this.skills.filter(function (skill) {
      //logic to be added- filter skillsModel Ids to data object
      //return skill.id === this.skillsModel;

    });
    console.log('skillsArr----'+ skillsArr);

  }

}
