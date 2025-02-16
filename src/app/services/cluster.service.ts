import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';


@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  #translateService = inject(TranslateService);
  #reservationApiService = inject(ClusterApiService)

  //private reservationItemBehaviorSubject$ = new BehaviorSubject<ReservationItem>(new ReservationItem());
  private isLoadingBehaviorSubject$= new BehaviorSubject<boolean>(false);

  // get reservationItem$() {
  //   return this.reservationItemBehaviorSubject$.asObservable();
  // }
  get isLoading$() {
    return this.isLoadingBehaviorSubject$.asObservable();
  }

  // createReservation() {
  //   var res = this.#newReservationApiService.createReservation(reservtion);
  //   res.pipe(take(1), tap(res => {
  //     if(res.isOk){
  //     this.reservationItemBehaviorSubject$.next(res.responseObject as ReservationItem);
  //     }else{
  //       if(res.message==="NO_ROOM"){
  //         this.showMessage("messageDialog.noRoom.title","messageDialog.noRoom.message");
  //       }
  //       else{
  //       this.showMessage("messageDialog.errorMessage.title","messageDialog.errorMessage.message");}
  //     }
  //   })).subscribe();
  //   return res;
  // }

}
