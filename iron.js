class Iron{
	constructor(x,y,w,h)
	{
		var options = {
			restitution:0.8,
			friction:3,
			density:30
		}
	
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(x,y,w,h, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironPos=this.body.position;		

			push()
			translate(ironPos.x, ironPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}