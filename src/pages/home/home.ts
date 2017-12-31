import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var Caman: any;
var PICTURE_HEIGHT = 1080;
var PICTURE_WIDTH = 1920;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addFilter(){
  	Caman('#new', function () {
    this.sinCity();
    this.render();
  })

  }

  stretch(){
  	var canvas = document.getElementById("newCanvas")
  	var context = canvas.getContext("2d")
  	var img1 = document.getElementById("img1")
  	var img2 = document.getElementById("img2")

  	var dims1 = this.stretchImage(img1)
  	var dims2 = this.stretchImage(img2)

  	console.log(dims1,dims2)
  	context.drawImage(img1,0,0,dims1[0],dims1[1])
  	context.drawImage(img2,dims1[0],0,dims2[0],dims2[1])
  	
  };

  crop(){
  	var canvas = document.getElementById("newCanvas")
  	var context = canvas.getContext("2d")
  	var img1 = document.getElementById("img1")
  	var img2 = document.getElementById("img2")

  	var crop1 = this.getCropCoords(img1)
  	var crop2 = this.getCropCoords(img2)

  	console.log(crop1)
  	console.log(crop2)

  	context.drawImage(img1,crop1[0],crop1[1],crop1[2],crop1[3],0,0,PICTURE_WIDTH/2,PICTURE_HEIGHT)
  	
  	context.drawImage(img2,crop2[0],crop2[1],crop2[2],crop2[3],PICTURE_WIDTH/2,0,PICTURE_WIDTH/2,PICTURE_HEIGHT)
  	
  };

  getCropCoords(public img: Image){
  	var maxH = PICTURE_HEIGHT
  	var maxW = PICTURE_WIDTH
  	if (maxH > img.height || maxW > img.width){
  		var scale = Math.min(maxW/img.width, maxH/img.height)
  		console.log('scale', scale)
  		maxW /= scale
  		maxH /= scale
  	}
  	var x = img.width/2 - maxW/2
  	var y = img.height/2 - maxH/2
  	return [x, y, maxW, maxH]
  };

  stretchImage(public img: Image){
  	var width = PICTURE_WIDTH/2
  	var height = PICTURE_HEIGHT
  	console.log('w,h:', width, height)
  	return [width, height]
  };
  

}


