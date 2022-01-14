import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'translatorsMonth',
})
export class TranslatorsMonthPipe implements PipeTransform {
	transform(value: string, args?: any): string {
		let index = value.indexOf(',');
		let dia = value.substring(index - 2);
		dia = dia.substring(0, 2);
		let mes = value.substring(0, 3);
		let ano = value.substring(index + 1);

		if (mes == 'Jan') {
			let date = `${dia} de Janeiro de ${ano}`;
			return date;
		}
		if (mes == 'Feb') {
			let date = `${dia} de Fevereiro de ${ano}`;
			return date;
		}
		if (mes == 'Mar') {
			let date = `${dia} de Março de ${ano}`;
			return date;
		}
		if (mes == 'Apr') {
			let date = `${dia} de Abril de ${ano}`;
			return date;
		}
		if (mes == 'May') {
			let date = `${dia} de Maio de ${ano}`;
			return date;
		}
		if (mes == 'Jun') {
			let date = `${dia} de Junho de ${ano}`;
			return date;
		}
		if (mes == 'Jul') {
			let date = `${dia} de Julho de ${ano}`;
			return date;
		}
		if (mes == 'Aug') {
			let date = `${dia} de Agosto de ${ano}`;
			return date;
		}
		if (mes == 'Sep') {
			let date = `${dia} de Setembro de ${ano}`;
			return date;
		}
		if (mes == 'Oct') {
			let date = `${dia} de Outubro de ${ano}`;
			return date;
		}
		if (mes == 'Nov') {
			let date = `${dia} de Novembro de ${ano}`;
			return date;
		}
		if (mes == 'Dec') {
			let date = `${dia} de Dezembro de ${ano}`;
			return date;
		} else {
			return value;
		}
	}
}
