export class Todo{
	id:number;
	title:string;
	comment:string;
	status:boolean;

	constructor(id:number, title:string, comment:string, status:boolean){
	this.id=id
	this.title=title
	this.comment=comment 
	this.status=status
	}
}