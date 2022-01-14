import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'translatorsBr',
})
export class TranslatorsBrPipe implements PipeTransform {
	transform(value: string, args?: any): string {
		//Sobre Personagens -----------------------------------------
		if (value == 'Alive') {
			let status = 'Vivo';
			return status;
		}
		if (value == 'Dead') {
			let status = 'Morto';
			return status;
		}
		if (value == 'Human') {
			let specie = 'Humano';
			return specie;
		}
		if (value == 'Male') {
			let gender = 'Masculino';
			return gender;
		}
		if (value == 'Female') {
			let gender = 'Feminino';
			return gender;
		}
		//Sobre Locais -----------------------------------------
		if (value == 'Earth (Replacement Dimension)') {
			let location = 'Earth (Replacement...';
			return location;
		}
		if (value == 'Planet') {
			let type = 'Planeta';
			return type;
		}
		if (value == 'Microverse') {
			let type = 'Microverso';
			return type;
		}
		if (value == 'Fantasy town') {
			let type = 'Cidade da fantasia';
			return type;
		}
		if (value == 'Space station') {
			let type = 'Estação Espacial';
			return type;
		}
		if (value == 'Dream') {
			let type = 'Sonho';
			return type;
		}
		if (value == 'Dimension') {
			let type = 'Dimensão';
			return type;
		}
		if (value == 'Menagerie') {
			let type = 'zoológico';
			return type;
		}
		if (value == 'Customs') {
			let type = 'Alfândega';
			return type;
		}
		if (value == 'Dwarf planet (Celestial Dwarf)') {
			let type = 'Planeta Anão (Anão Celestial)';
			return type;
		}
		if (value == 'Miniverse') {
			let type = 'Miniverso';
			return type;
		}
		if (value == 'Teenyverse') {
			let type = 'Pequeno verso';
			return type;
		}
		if (value == 'Box') {
			let type = 'Caixa';
			return type;
		}
		if (value == 'Spacecraft') {
			let type = 'Nave espacial';
			return type;
		}
		if (value == 'Artificially generated world') {
			let type = 'Mundo gerado artificialmente';
			return type;
		}
		if (value == 'Machine') {
			let type = 'Máquina';
			return type;
		}
		if (value == 'Arcade') {
			let type = 'videogames';
			return type;
		}
		if (value == 'Cluster') {
			let type = 'Espaço';
			return type;
		}
		//Outros -----------------------------------------
		if (value == '' || value == 'unknown') {
			let resp = 'Desconhecido';
			return resp;
		} else {
			return value;
		}
	}
}
