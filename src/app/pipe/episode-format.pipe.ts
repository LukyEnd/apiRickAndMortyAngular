import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'episodeFormat',
})
export class EpisodeFormatPipe implements PipeTransform {
	transform(value: string, args?: any): string {
		let ep = value.substring(4, 6);
		let temp = value.substring(1, 3);
		let resp = `Temporada ${temp}, Episódio ${ep}`;
		return resp;
	}
}
