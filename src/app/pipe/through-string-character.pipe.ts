import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'throughStringCharacter',
})
export class ThroughStringCharacterPipe implements PipeTransform {
	transform(value: string, args?: any): string {
		let index = value.indexOf('/character/');
		let id = value.substring(index + 11);
		return id;
	}
}
