import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
	export class AppComponent {
	  title = 'app work!';
	  rForm: FormGroup;
	  name:string = '';
	  email:string = '';
	  telno:string = '';
	  alertName:string = 'This field is required';
	  alertEmail:string = 'This field is required';
	  alertTel:string = 'This field is required';

	constructor(private fb: FormBuilder){

	    this.rForm = fb.group({

	    'name' : [null, Validators.requires],
	    'email' : [null, Validators.requires],
	    'telno' : [null, Validators.requires]

	  })
	}

	addPost(post){
			
			this.name = post.name;
			this.email = post.email;
			this.telno = post.telno;
	}
}
