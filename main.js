// Write your code here
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
let engine = Engine.create();
let render = Render.create({
    options:{
        wireframes: false
    },
    element: document.body,
    engine: engine
});
Engine.run(engine);
Render.run(render);

let ball=Bodies.circle(200, 10, 40);
let floor = Bodies.rectangle(400, 500, 800, 20, {isStatic: true});
let octagon = Bodies.polygon(500,20,8,150);
let triangle = Bodies.polygon(200,30,3,100);
let trapezoid = Bodies.trapezoid(350,40,200,75,.50)
let pentagon =  Bodies.polygon(200,30,5,100);
let hexagon =  Bodies.polygon(200,30,6,100);
let jectagon = Bodies.polygon(200,30,14,100);
let rectugon =  Bodies.polygon(200,30,9,100);
let hokpghgon = Bodies.polygon(200,30,12,100);
let gkhg =  Bodies.polygon(200,30,7,100);
let jfgf = Bodies.polygon(200,30,8,100);
let djflsdaf = Bodies.polygon(200,30,69,100);
// let floor=Bodies.trapezoid(340,300,500,100,.9,{isStatic: true});
// let myCar=Composites.car(390, 0, 100, 30, 40);
// let myCradle=Composites.newtonsCradle(600, 100, 5, 10, 160);
World.add(engine.world, [ball,octagon, floor, triangle,trapezoid,pentagon,hexagon,jectagon,rectugon,hokpghgon,gkhg,]);
//
// let world = engine.world;
// let Mouse= Matter.Mouse;
// let MouseConstraint=Matter.MouseConstraint;
// let mouse = Mouse.create(render.canvas);
// let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
// World.add(world, mouseConstraint);
// render.mouse = mouse;
