function changeImage(){
	let displayImage=document.getElementById('rose')
	if(displayImage.src.match('rose.jpg')){
		displayImage.src='lily.jpg'
	}
	else{
		displayImage.src='rose.jpg'
	}
}

/* Reference of the images*/

/* "lily.jpg" image retrieved from "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmerr
iam-webster.com%2Fassets%2Fmw%2Fimages%2Farticle%2Fart-wap-landing-mp-lg%2Flily%2520flower
s-8290-7ef7e906d4d101aade6de413468cd79a%401x.jpg&imgrefurl=https%3A%2F%2Fwww.merriam-webste
r.com%2Fwords-at-play%2Fgild-the-lily-origin-shakespeare&tbnid=IB7y1T5b_2cS9M&vet=12ahUKEwi
y89q_n-f2AhVsM1kFHeODC6kQMygJegUIARDwAQ..i&docid=F3pnxDtkHcdXHM&w=724&h=543&q=lily&ved=2ahU
KEwiy89q_n-f2AhVsM1kFHeODC6kQMygJegUIARDwAQ" */

/*"rose.jpg" image retrieved from "https://www.google.com/imgres?imgurl=https%3A%2F%2Fuploa
d.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F62%2FRosa_Ingrid_Bergman_2018-07-16_6611_%2528c
ropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHybrid_tea_rose&tbnid=K1V
LrAog74KEWM&vet=12ahUKEwjSh4DBnOf2AhV8mXIEHbLcCQ8QMygBegUIARC9Ag..i&docid=7-qCuwQYtcfdjM&w=2
918&h=2383&q=rose&ved=2ahUKEwjSh4DBnOf2AhV8mXIEHbLcCQ8QMygBegUIARC9Ag"*/ 
	