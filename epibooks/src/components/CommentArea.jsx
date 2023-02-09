import { Component } from "react";
import ListComment from "./ListComment";
import AddComment from "./AddComment";

class CommentArea extends Component {
    state = {
        comment: {}
    }

    fetchComment = async () => {
        try {
            const response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/"+this.props.id, {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MTRmY2EyNDc4ZDAwMTNhMDU4NWMiLCJpYXQiOjE2NzU5NTc1MDAsImV4cCI6MTY3NzE2NzEwMH0.JCClAHcgxNinvpm6nI4gIggA093DJQ66UXQS7VoXFXc"
                }
                })
                if (response.ok) {
                    const data = await response.json();
                    this.setState({
                        comment:data
                  })                                                    
                }
                
        } catch(error) {
            alert("Non funziona", error)

        }
    }
    render () {
        return (
            <>
            <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-light">
                <ListComment id={this.props.id}/>
                <AddComment/>               
            </div>
            </>
        )
    }
}

export default CommentArea;