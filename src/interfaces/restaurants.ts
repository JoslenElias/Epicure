import {dish} from './dish'

export interface restaurants{
    URLImage:string;
    name:string;
    ChefName:string;
    Status:string;
    dishes:dish[];
}

export const Claro:restaurants={
    URLImage:"./img/claro.svg",
    name:"Claro",
    ChefName:"Ran Shmueli",
    Status:"Open now",
    dishes:[]
}
export const KabKem:restaurants={
    URLImage:"./img/kabkem.svg",
    name:"Kab Kem",
    ChefName:"Yariv Malili",
    Status:"Closed",
    dishes:[]
}
export const Messa:restaurants={
    URLImage:"./img/messa.svg",
    name:"Messa",
    ChefName:"Aviv Moshe",
    Status:"Open now",
    dishes:[]
}
 export const AllRestaurants:restaurants[]=[Claro,KabKem,Messa];