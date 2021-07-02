//import { User, Album, Picture, PhotoOrientation } from "./photo-app";
import { User } from './user';
import { Album } from './album';
import { Picture } from './picture';
import { PhotoOrientation } from './photo-orientation';

const user = new User(1, "JulesCubs", "Julian", true);
const album = new Album(10, "Pictures");
const picture = new Picture(1, "TypeScript", "2021-05", PhotoOrientation.Landscape);

//Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);

//Borramos album
user.removeAlbum(album);
console.log("user", user);
