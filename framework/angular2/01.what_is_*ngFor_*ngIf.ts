

"The (*) prefix to ngFor indicates that the <li> element and its children constitute a master template."


@Component({
	selector: 'my-app',
	template: `
		<ul class="heroes">	
			<li *ngFor="let hero of heroes">
				<!-- each hero goes here  -->
			</li>
		</ul>
		`
});


"ngIf and ngFor are called “structural directives” because they can change the structure of portions of the DOM."
