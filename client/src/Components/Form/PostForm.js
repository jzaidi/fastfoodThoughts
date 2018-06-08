import React, { Component } from "react";
import "./PostForm.css";
import axios from "axios";

class PostForm extends Component {
    onSubmit = e => {
        e.preventDefault();
        const {title, author, description, id, images} = this.props.currentPost;

        if (this.props.editing) {
            //update
            axios
                .patch(`/api/posts/${id}`, { title, author, description, id, images})
                .then(result => {
                    this.props.updatePosts(result.data);
                    this.postForm.reset();
                });
        } else {
            //create a new record
            axios.post("/api/posts", { title, author, description, images}).then(result => {
                this.props.updatePosts(result.data);
                this.postForm.reset();
            });
        }
    };

    onChange = e => {
        this.props.updatePost(e.target.name, e.target.value);
    };

    render() {
        const {title, author, description, images} = this.props.currentPost;
        return <form ref={el => (this.postForm = el)} className="Post" onSubmit={this.onSubmit}>
            <h3>{this.props.editing ? "Update Post" : "Add A Post"}</h3>
            <p className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="form-control" onChange={this.onChange} value={title} />
            </p>
            <p className="form-group">
              <label htmlFor="author">Author</label>
              <input type="text" name="author" className="form-control" onChange={this.onChange} value={author} />
            </p>
            <p className="form-group">
              <label htmlFor="images">Employer</label>
              <input type="text" name="images" className="form-control" onChange={this.onChange} placeholder="Enter Image Url From Google" value={images} />
            </p>
            <p className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" name="description" className="form-control" onChange={this.onChange} value={description} />
            </p>
            <p className="form-group">
              {this.props.editing && <a type="submit" value="Cancel" className="btn btn-default" style={{ marginRight: ".5em" }} onClick={this.props.stopEdit}>
                  Cancel
                </a>}
              <input type="submit" value={this.props.editing ? "Update Post" : "Add Post"} className="btn btn-primary" />
            </p>
          </form>;
    }
}

export default PostForm;
