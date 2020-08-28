import { Component, OnInit } from "@angular/core";
import { Store, Action, ActionReducerMap, createSelector } from "@ngrx/store";
import { CharacterState } from "./../store/Character.state";
import { SetRaceAction } from "./../store/actions/race.action";
import { SetSpecialtyAction } from "./../store/actions/set-speciality.action";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  currentRace = this.store.select("race");
  currentSpecialty = this.store.select("specialty");

  constructor(public store: Store<CharacterState>) {}

  ngOnInit() {}

  dispatchRace(race) {
    this.store.dispatch(new SetRaceAction(race));
  }

  dispatchSpecialty(spec) {
    this.store.dispatch(new SetSpecialtyAction(spec));
  }
}
