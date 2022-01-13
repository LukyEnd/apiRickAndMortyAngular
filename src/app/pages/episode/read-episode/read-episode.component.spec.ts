import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadEpisodeComponent } from './read-episode.component';

describe('ReadEpisodeComponent', () => {
	let component: ReadEpisodeComponent;
	let fixture: ComponentFixture<ReadEpisodeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ReadEpisodeComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ReadEpisodeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
