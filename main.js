var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";
player_update()
function player_update()
{
	fabric.Image.fromURL("jogador.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	codigo = e.keyCode
	console.log(codigo)
	if(codigo == 65){
		new_image("https://static.wikia.nocookie.net/minecraft-computer/images/0/01/Tall_Grass.png")
	}
	if(codigo==66 && e.shiftKey){
		block_image_width+=10
		block_image_height+=10
	}


	if(codigo == 71){
		new_image("https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5d/Grass_%28item%29.png")
	}

	if(codigo==37){

		if(player_x>0){
			player_x -=block_image_width
			canvas.remove(player_object)
			player_update()
		}
	}
	if(codigo==38){
		player_y -=block_image_width
		canvas.remove(player_object)
		player_update()
	}
	if(codigo==39){
		player_x +=block_image_width
		//canvas.remove(player_object)
		player_update()
	}
	if(codigo==40){
		player_y +=block_image_width
		canvas.remove(player_object)
		player_update()
	}
}