import React from "react";

type PropsType = {
    aboutMe: null | string
}
type StateType = {
    editMode: boolean;
}


class ProfileStatus extends React.Component<PropsType,StateType> {

    state={
        editMode: false
    }

    handleEditMode = () => {
        this.setState((prevState) => ({
            editMode: !prevState.editMode,
        }));
    };

    render() {
        return (
            <div>
                {!this.state.editMode ? <div onDoubleClick={this.handleEditMode}>{this.props.aboutMe}</div> :
                    <input value={this.props.aboutMe || ''} onBlur={this.handleEditMode} autoFocus={true}/>}
            </div>
        )
    }


}


export default ProfileStatus