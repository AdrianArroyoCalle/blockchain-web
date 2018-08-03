import {Component, Directive, ElementRef, AfterViewInit} from '@angular/core';
import { sha256 } from 'js-sha256';

var mineWorker = `
self.onmessage = function(oEvent){
	var sha256 = oEvent.data.sha;
	var data = oEvent.data.data;
	var hash = "";
	var nonce = 0;
	while(!hash.startsWith("0000")){
		nonce++;
		hash = sha256(nonce + ""+data);
		}
	console.log("HASH: "+hash+"\tNONCE: "+nonce);
	postMessage(nonce);

}
`;

class Lesson {
	public show: boolean;
	constructor(){
		this.show = false;
		}
	change(){
		this.show = !this.show;
	}
}

@Component({
	selector: "lesson-tokens",
	templateUrl: "lesson.tokens.html"
})

export class LessonTokens extends Lesson{

}

@Component({
	selector: "lesson-thanks",
	templateUrl: "lesson.thanks.html"
})

export class LessonThanks extends Lesson{

}

@Component({
	selector: "lesson-hash",
	templateUrl: "lesson.hash.html"
})

export class LessonHash extends Lesson{
	data: string;
	hash256: string;
	inputChange(){
		this.hash256 = sha256(this.data);
	}
}

@Component({
	selector: "lesson-block",
	templateUrl: "lesson.block.html"
})

export class LessonBlock extends Lesson{
	valid: boolean;
	data: string;
	hash256: string;
	nonce: string;
	inputChange(){
		this.hash256 = sha256(this.nonce + this.data);
		this.valid = this.hash256.startsWith("000");
	}
	mine(){
		var hash = this.hash256;
		var nonce = 0;
		while(!hash.startsWith("000") || nonce==0){
			nonce++;
			hash = sha256(nonce + ""+this.data);
		}
		this.hash256 = hash;
		this.nonce = ""+nonce;
		this.valid = true;
	}
}

@Component({
	selector: "lesson-blockchain",
	templateUrl: "lesson.blockchain.html"
})
export class LessonBlockchain extends Lesson{
	nonce: string[];
	data: string[];
	valid: boolean[];
	hash256: string[];

	constructor(){
		super();
		this.nonce = new Array(5);
		this.data = new Array(5);
		this.valid = new Array(5);
		this.hash256 = new Array(5);
	}

	inputChange(){
		for(var i=0;i<5;i++){
			this.hash256[i] = sha256(this.nonce[i]+this.data[i]+this.hash256[i-1]);
			this.valid[i] = this.hash256[i].startsWith("000");
		}
	}
	mine(id: number){
		var hash = this.hash256[id];
		var nonce = 0;
		while(!hash.startsWith("000") ||  nonce == 0){
			nonce++;
			hash = sha256(nonce+this.data[id]+this.hash256[id-1]);
		}
		this.hash256[id] = hash;
		this.nonce[id] = ""+nonce;
		this.valid[id] = true;
			
	}
}

@Component({
	selector: "lesson-distributed",
	templateUrl: "lesson.distributed.html"
})
export class LessonDistributed extends Lesson{
	nonceA: string[];
	nonceB: string[];
	nonceC: string[];
	dataA: string[];
	dataB: string[];
	dataC: string[];
	validA: boolean[];
	validB: boolean[];
	validC: boolean[];
	hash256A: string[];
	hash256B: string[];
	hash256C: string[];

	constructor(){
		super();
		this.nonceA = new Array(5);
		this.nonceB = new Array(5);
		this.nonceC = new Array(5);
		this.dataA = new Array(5);
		this.dataB = new Array(5);
		this.dataC = new Array(5);
		this.validA = new Array(5);
		this.validB = new Array(5);
		this.validC = new Array(5);
		this.hash256A = new Array(5);
		this.hash256B = new Array(5);
		this.hash256C = new Array(5);
		for(var i=0;i<5;i++){
			this.hash256A[i] = "0";
			this.hash256B[i] = "0";
			this.hash256C[i] = "0";
		}
	}

	inputChangeA(){
		for(var i=0;i<5;i++){
			this.hash256A[i] = sha256(this.nonceA[i]+this.dataA[i]+this.hash256A[i-1]);
			this.validA[i] = this.hash256A[i].startsWith("000");
		}
	}
	inputChangeB(){
		for(var i=0;i<5;i++){
			this.hash256B[i] = sha256(this.nonceB[i]+this.dataB[i]+this.hash256B[i-1]);
			this.validB[i] = this.hash256B[i].startsWith("000");
		}
	}
	inputChangeC(){
		for(var i=0;i<5;i++){
			this.hash256C[i] = sha256(this.nonceC[i]+this.dataC[i]+this.hash256C[i-1]);
			this.validC[i] = this.hash256C[i].startsWith("000");
		}
	}
	mineA(id: number){
		var hash = this.hash256A[id];
		var nonce = 0;
		while(!hash.startsWith("000") ||  nonce == 0){
			nonce++;
			hash = sha256(nonce+this.dataA[id]+this.hash256A[id-1]);
		}
		this.hash256A[id] = hash;
		this.nonceA[id] = ""+nonce;
		this.validA[id] = true;
			
	}
	mineB(id: number){
		var hash = this.hash256B[id];
		var nonce = 0;
		while(!hash.startsWith("000") ||  nonce == 0){
			nonce++;
			hash = sha256(nonce+this.dataB[id]+this.hash256B[id-1]);
		}
		this.hash256B[id] = hash;
		this.nonceB[id] = ""+nonce;
		this.validB[id] = true;
			
	}
	mineC(id: number){
		var hash = this.hash256C[id];
		var nonce = 0;
		while(!hash.startsWith("000") ||  nonce == 0){
			nonce++;
			hash = sha256(nonce+this.dataC[id]+this.hash256C[id-1]);
		}
		this.hash256C[id] = hash;
		this.nonceC[id] = ""+nonce;
		this.validC[id] = true;
			
	}
}

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements AfterViewInit{
	ngAfterViewInit(){
		try{
			/*(adsbygoogle = window.adsbygoogle || []).push({});
			(adsbygoogle = window.adsbygoogle || []).push({});*/
		}catch(e){
		
		}
	}
}
