import { Component, OnInit } from "@angular/core";
import { Store, Action, ActionReducerMap, createSelector } from "@ngrx/store";
import { CharacterState } from "./../store/Character.state";
@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  currentRace = this.store.select("race");
  currentSpecialty = this.store.select("specialty");

  constructor(public store: Store<CharacterState>) {}

  ngOnInit() {}
}
