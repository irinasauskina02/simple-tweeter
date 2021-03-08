import React from 'react';
import './post-list.css'
import PostListItem from '../post-list-item';

const PostList = ({posts }) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key = {id} className = "list-group-item">
                 {/* Старый вывод
                 <PostListItem 
                 label = {item.label} 
                 important = {item.important}/> */}
                 {/* Новый синтексис, использование спрет оператора */}
                <PostListItem {...itemProps}/>
            </li>
        )
    });
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;