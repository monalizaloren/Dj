//Crie a variável song
???

function preload()
{
    //Utilize o código 'loadSound' para carregar um som
	song = ???("music.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
    //Crie um código para cria um canva
	canvas =  ???(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video);
	poseNet.on('pose', gotPoses);
}



function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
		
  }
}

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

	if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

		if(rightWristY >0 && rightWristY <= 100)
		{
			document.getElementById("speed").innerHTML = "Velocidade = 0.5x";	
            //Utilize o código 'song.rate' para alterar a velocidade do som	
			???(0.5);
		}
		else if(rightWristY >100 && rightWristY <= 200)
		{
			document.getElementById("speed").innerHTML = "Velocidade = 1x";		
			???(1);
		}
		else if(rightWristY >200 && rightWristY <= 300)
		{
			document.getElementById("speed").innerHTML = "Velocidade = 1.5x";		
			???(1.5);
		}
		else if(rightWristY >300 && rightWristY <= 400)
		{
			document.getElementById("speed").innerHTML = "Velocidade = 2x";		
			???(2);
		}
		else if(rightWristY >400)
		{
			document.getElementById("speed").innerHTML = "Velocidade = 2.5x";		
			???(2.5);
		}
	}

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
		InNumberleftWristY = Number(leftWristY); 
		remove_decimals = floor(InNumberleftWristY);
		volume = remove_decimals/500;
		document.getElementById("volume").innerHTML = "Volume = " + volume;		
        //Utilize o codigo 'song.setVolume(volume);	' para alterar o volume
		song.setVolume(volume);	
	}

}

function play()
{
    //Coloque o código que iniciar a música
	???
    //Coloque o código que altera o volume
	??
    //Coloque o código que muda a velocidade da música
	???
}
