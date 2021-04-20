//Enum
//Orientacion fotografias

// const landScape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
	Landscape = 0, //0  <--Se puede asignar el valor
	Portrait, //1 <-- El valor del indice enum se suma apartir del anterior
	Square, //2
	Panorama, //3
}

const landScape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("landscape", landScape);
console.log("landscape", PhotoOrientation[landScape]);

enum PictureOrientation {
	Landscape = 0, //0
	Portrait = 1, //1
	Square = 2, //2
	Panorama = 3, //3
}

console.log("portrait", PictureOrientation.Portrait);
console.log("portrait", PhotoOrientation.Portrait);

enum Country {
	Bolivia = "bol",
	Colombia = "col",
	Mexico = "mex",
	EEUU = "usa",
	Espana = "esp",
}

const country: Country = Country.Colombia;
console.log("Country", Country);
