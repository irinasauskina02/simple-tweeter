import React, { Component } from 'react';
import AppHeader from '../app-header';
import AppSearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component{
   constructor(props) {
      super(props);
      this.state = {
         data: [
               {label: 'Going to learn react', important: true, like: false, id: 1},
               {label: 'That is so good', important: false, like: false, id: 2},
               {label: 'I need a break...', important: false,  like: false,id: 3}   
            ]
      };
      this.deleteItem = this.deleteItem.bind(this);
      this.addItem = this.addItem.bind(this);
      this.maxId = 4;
      this.onToggleLike = this.onToggleLike.bind(this);
      this.onToggleImportant = this.onToggleImportant.bind(this);

   }
   deleteItem(id) {
      this.setState(({data}) => {
         const index = data.findIndex(elem => elem.id === id);
         const before = data.slice(0, index);
         const after = data.slice(index+1);
         const newArray = [...before, ...after];
         return {
            data: newArray
         }
      });
   }
   addItem(body) {
      const newItem = {
         label: body,
         important: false,
         id: this.maxId++
      }
      this.setState( ({data}) => {
         const newArray = [...data, newItem];
         return {
            data: newArray
         }
      })
   }
   onToggleImportant(id) {
      this.setState(({data}) => {
         const index = data.findIndex(elem => elem.id === id);
         const old = data[index];
         const newItem = {...old, important: !old.important};
         const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)];
         return {
            data: newArray
         }
      })
   }
   onToggleLike(id){
     
      this.setState(({data}) => {
         const index = data.findIndex(elem => elem.id === id);
         const old = data[index];
         const newItem = {...old, like: !old.like};
         const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)];
         return {
            data: newArray
         }
      })
   }
    render() {
       const {data} = this.state;
       const likes = data.filter(item => item.like).length;
      const allPost = data.length;
      return( 
         <div className="app">
             <AppHeader 
               liked = {likes}
               allPost ={allPost} />
            <div className="search-panel d-flex">    
               <AppSearchPanel/>
               <PostStatusFilter/>
            </div>
            <PostList posts = {this.state.data}
            onDelete = {this.deleteItem}
            onToggleImportant = {this.onToggleImportant}
            onToggleLike = {this.onToggleLike}
               />
            <PostAddForm
            onAdd = {this.addItem}/>  
         </div>         
        
         )
   }
   
}

