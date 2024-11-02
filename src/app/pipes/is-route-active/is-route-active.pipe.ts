import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'isRouteActive',
  pure: false,
  standalone: true
})
export class IsRouteActivePipe implements PipeTransform {
  constructor(private router: Router) { }
  transform(route: string, ...args: unknown[]): boolean {
    return this.router.url === route;
  }

}
