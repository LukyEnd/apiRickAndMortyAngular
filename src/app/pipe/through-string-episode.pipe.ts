import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'throughStringEpisode',
})
export class ThroughStringEpisodePipe implements PipeTransform {
	transform(value: string, args?: any): string {
		let index = value.indexOf('/episode/');
		let id = value.substring(index + 9);
		return id;
	}
}
