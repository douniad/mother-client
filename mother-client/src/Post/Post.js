import React from 'react'

class Post extends Component {

    render() {
        return (
            <div className="post-container">
                <h3>
                    <Link to={`/post/${this.props.id}`} className="post-title">{this.props.name}</Link>
                </h3>
                <p className="modified">{this.props.modified}</p>
                <button onClick={() => this.afterDelete()} type="button" className="delete-post">Delete Post</button>
            </div>
        )
    }
}