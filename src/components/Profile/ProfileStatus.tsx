import React, {ChangeEvent} from "react";

type PropsType = {
    setUserProfileStatusTC: (status: string) => void
    status: string
}
type StateType = {
    editMode: boolean;
    status: string
}

type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<ProfileStatusStateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {

        this.props.setUserProfileStatusTC(this.state.status)
        this.setState({
            editMode: false
        })

    }
    onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ? <div onDoubleClick={this.activateEditMode}>{!this.props.status ? 'Enter your status' : this.props.status}</div> :
                    <input
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}
                        autoFocus={true}
                        onChange={this.onStatusChangeHandler}
                    />}
            </div>
        )
    }


}


export default ProfileStatus