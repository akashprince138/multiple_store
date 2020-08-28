import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { raceReducer } from "./store/reducers/race.reducer";
import { specialtyReducer } from "./store/reducers/speciality.reducer";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "test", component: TestComponent },
];
@NgModule({
  declarations: [AppComponent, IndexComponent, TestComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      race: raceReducer,
      specialty: specialtyReducer,
    } as any),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
