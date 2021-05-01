"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//function showPicture(picture: {title: string, date: string, orientation: PhotoOrientation}) {  <--- Es correcto usarlo asi pero el uso de interfaces simplifica el codigo
function showPicture(picture) {
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
function generatePicture(config) {
    const pic = {};
    if (config.title) {
        pic.title = config.title;
    }
}
