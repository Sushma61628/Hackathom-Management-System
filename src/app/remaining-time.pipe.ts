import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingTime'
})
export class RemainingTimePipe implements PipeTransform {

  transform(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
