"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { User, Album, Picture, PhotoOrientation } from "./photo-app";
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, "JulesCubs", "Julian", true);
const album = new album_1.Album(10, "Pictures");
const picture = new picture_1.Picture(1, "TypeScript", "2021-05", photo_orientation_1.PhotoOrientation.Landscape);
//Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log("user", user);
//Borramos album
user.removeAlbum(album);
console.log("user", user);
