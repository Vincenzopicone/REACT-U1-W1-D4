import { Component } from "react";

class ListComment extends Component {
    
    render () {
        return (
            <>
            <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-light">
                <p>Commento: {}</p>
                <p>Rate: {}</p>
                <p>ID: {}</p>
            </div>
            </>
        )
    }
}

export default ListComment;