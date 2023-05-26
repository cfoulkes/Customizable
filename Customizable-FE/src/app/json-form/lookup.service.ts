import { Injectable } from '@angular/core';

export class LookupItem {
  id: number;
  text: string;

  constructor(obj: any) {
    this.id = obj.id;
    this.text = obj.text;
  }
}


@Injectable({
  providedIn: 'root'
})
export class LookupService {

  selectLists: LookupItem[] = [
    { id: 1, text: 'Marital Statuses' },
    { id: 2, text: 'Genders' },
    { id: 3, text: 'Countries' },
    { id: 4, text: 'Provinces' },
  ]

  countries: LookupItem[] = [
    { id: 1, text: 'Canada' },
    { id: 2, text: 'US' },
  ];

  provinces: any[] = [
    { id: 1, countryId: 1, text: 'Alberta' },
    { id: 2, countryId: 1, text: 'British Columbia' },
    { id: 3, countryId: 1, text: 'Manitoba' },
    { id: 4, countryId: 2, text: 'Alabama' },
    { id: 5, countryId: 2, text: 'Alaska' },
  ]

  maritalStatuses: LookupItem[] = [
    { id: 1, text: 'Single' },
    { id: 2, text: 'Married' },
    { id: 3, text: 'Common Law' },
    { id: 4, text: 'Separated' },
    { id: 5, text: 'Divorced' },
    { id: 6, text: 'Widowed' },
  ]

  genders: any[] = [
    { id: 1, text: 'Male' },
    { id: 2, text: 'Female' },
    { id: 3, text: 'Other' },
  ]



  constructor() { }


  getLookupsByKey(lookupId: number) {
    switch (lookupId) {
      case 1:
        return this.maritalStatuses;
      case 2:
        return this.genders;
      case 3:
        return this.countries;

      default:
        return [];
    }
  }

  getLookupsByKeyAndFilterId(lookupId: number, filterId: number) {
    switch (lookupId) {
      case 4:
        return this.provinces.filter(p => p.countryId === filterId).map(p => { return { id: p.id, text: p.text } });

      default:
        return [];
    }
  }


}
