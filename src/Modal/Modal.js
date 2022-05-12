import React from "react";
import './Modal.css'

export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Инструкция</button>

                {this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Инструкция</h1>
                            <p>Создавайте, удаляйте и отмечайте "выполнено" !</p>
                            <button onClick={() => this.setState({isOpen: false})}>Закрыть</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}