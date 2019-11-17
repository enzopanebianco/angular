export interface RequestUpdate{
    name:string;
    email:string;
    createdAt:string;
}
export interface ResponseUpdate{
    name:string;
    email:string;
    createdAt:string;

}
export interface ResponseUser{
    nome:string;
    id:number;
    email:string;
    createdAt:string;
    length:number;

}
export interface RequestUser{
    name:string;
   
    email:string;
    createdAt:string;

}
export interface RequestLogin{
    email:string;
    senha:string;
    token:string,
}
export interface ResponseLogin{
    email:string;
    senha:string;
    
}
export interface Skill{
    idSkill: string,
    nome: string,
    idTipoSkill: string
}