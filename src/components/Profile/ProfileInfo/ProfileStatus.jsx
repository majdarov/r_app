import React from "react";
import s from "./ProfileInfo.module.css";
import { profileApi } from "../../../api/api";
import { updateStatus } from "../../../redux/profileReduser";

class ProfileStatus extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.activateEditMode = this.activateEditMode.bind(this);
    //     this.deactivateEditMode = this.deactivateEditMode.bind(this);
    //     this.onChangeStatus = this.onChangeStatus.bind(this);
    // }

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidMount() {
        profileApi.getStatus(this.props.id)
        .then( status => {
            status = status ? status : this.props.status;
            this.setState({status})
        });
    }

    componentWillUnmount() {
        this.setState({status: null});
    }
    

    activateEditMode = () => {
        if (this.props.me !== this.props.id) return;
        this.setState({editMode: true});
    }
    
    deactivateEditMode = (ev) => {
        let value = ev.target.value;
        this.setState({editMode: false, status: value});
        this.props.updateStatus(this.state.status);
    }

    onChangeStatus = (ev) => {
        let value = ev.target.value;
        this.setState({status: value});
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
};

export default ProfileStatus;
