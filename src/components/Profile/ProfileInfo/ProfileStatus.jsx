import React, { useState } from "react";

/* class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidMount() {
        profileApi.getStatus(this.props.id)
            .then(status => {
                status = status ? status : this.props.status;
                this.setState({ status })
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    componentWillUnmount() {
        this.setState({ status: null });
    }


    activateEditMode = () => {
        if (this.props.me !== this.props.id) return;
        this.setState({ editMode: true });
    }

    deactivateEditMode = (ev) => {
        let value = ev.target.value;
        // if (this.state.status !== value) {
            this.setState({ editMode: false, status: value });
            this.props.updateStatus(this.state.status);
        // }
    }

    onChangeStatus = (ev) => {
        let value = ev.target.value;
        this.setState({ status: value });
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Not status...'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onChangeStatus} value={this.state.status} />
                    </div>
                }
            </>
        );
    }
}; */

const ProfileStatus = props => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        if (props.me !== props.id) return;
        setEditMode(true);
    }

    const deactivateEditMode = (ev) => {
        let value = ev.target.value;
        setEditMode(false);
        setStatus(value);
        props.updateStatus(status);
    }

    const onChangeStatus = (ev) => {
        let value = ev.target.value;
        setStatus(value);
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Not status...'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onChangeStatus} value={status} />
                </div>
            }
        </>
    );
};

export default ProfileStatus;
