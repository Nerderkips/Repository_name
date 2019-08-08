let colsworld = ["green", "brown", "blue"];

let world = [];

for(let i = 0;i<1600/10;i++){
    world.push(1);
}

for(let i = 0;i<1600/10;i++){
    if(i%2==0){
       world.push(0) 
    }else{
        world.push(1);
    }
}

for(let i = 0;i<1600/10;i++){
    world.push(0);
}

for(let i = 0;i<138;i++){
    for(let i = 0;i<1600/10;i++){
        l = Math.floor(Math.random()*25);
        if(l == 2){
            world.push(1);
        }else{
            world.push(0);
        }
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    render(world, colsworld, 1600/10, 0, 0);
} 
