import React from 'react';


class SelectOptions extends React.Component {
    render(){
        const {
            skills, 
            updateSkill,
        } = this.props;
        return(
            <select className="skills--stuffed" name="" id="" onChange={updateSkill}>
                {skills.map(function(skill,index){
                    return(<option value={skill} key={index}>{skill}</option>);
                })}
            </select>
        );
    }
}

export default SelectOptions;