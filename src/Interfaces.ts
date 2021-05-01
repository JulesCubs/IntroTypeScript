//Funcion para mostrar una fotografia
export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//Interfaz que contrata lo que recibe esta funcion
interface Picture {
    title: string;
    date: string, 
    orientation: PhotoOrientation,
}

//function showPicture(picture: {title: string, date: string, orientation: PhotoOrientation}) {  <--- Es correcto usarlo asi pero el uso de interfaces simplifica el codigo
function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
        date: ${picture.date}, 
        orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test Title 2',
    date: '2020-04',
    orientation: PhotoOrientation.Portrait,
    //extra: 'test'  //<--- Error no se encuentra en la interface
});

interface PictureConfig {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {}
    if(config.title) {
        pic.title= config.title;
        
    }
}