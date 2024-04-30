import { Injectable } from '@angular/core';

export class ChildService {
  logger = () => {
    alert('Child Service called and I am giving injection token explicitly');
  };
}
