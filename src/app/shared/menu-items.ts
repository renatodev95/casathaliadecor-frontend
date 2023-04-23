import { Injectable } from "@angular/core";


export interface Menu{
    state:string;
    name:string;
    type:string;
    icon:string;
    role:string;
}

const MENUITEMS = [
  {state:'dashboard' , name:'Dashboard', type:'link', icon:'dashboard', role:''},
  {state:'category' , name:'Gerenciar Categorias', type:'link', icon:'category', role:'admin'},
  {state:'product' , name:'Gerenciar Produtos', type:'link', icon:'inventory_2', role:'admin'},
  {state:'order' , name:'Gerar Pedidos', type:'link', icon:'shopping_cart', role:''},
  {state:'bill' , name:'Visualizar Pedidos', type:'link', icon:'backup_table', role:''},
]
@Injectable()
export class MenuItems{
    getMenuitem():Menu[]{
        return MENUITEMS;
    }
}
