class Stone{
	constructor(x,y,w,h)
	{
		var options = {
			restitution:0.8,
			friction:0.9,
			density:12
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
			var stonePos=this.body.position;		

			push()
			translate(stonePos.x, stonePos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}