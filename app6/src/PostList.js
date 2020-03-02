import React, { Component } from 'react';
import RandomData from './data/posts.json'

class PostList extends Component {
    render() {
        return (
            <div>
                {RandomData.map((postDetail, index) => {
                    return <div>
                        <h1>{postDetail.title}</h1>
                        <p>{postDetail.content}</p>
                    </div>
                })}
            </div>
        )
    }
}
export default PostList;
