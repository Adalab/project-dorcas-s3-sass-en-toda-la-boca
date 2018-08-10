import React from 'react';
import SelectOptions from './SelectOptions';
import CardButton from './CardButton';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    handleButtonClass(index) {
        const 
            classPlus = 'fas fa-plus',
            classMinus = 'fas fa-minus',
            skillsArray = this.props.divSkills;
        if (skillsArray.length === 3) return classMinus;
        if (skillsArray.length === 1) return classPlus;
        return index === skillsArray.length - 1 ? classPlus : classMinus;
    }

    render() {
        const {
            skills,
            divSkills,
            addSkills,
        } = this.props;

        return (
            <div>
                {divSkills.map((valor, i) => {
                    return (
                        <div key={i}>
                            <SelectOptions
                                skills={skills}
                            />
                            <CardButton
                                addSkills={addSkills}
                                buttonClass={this.handleButtonClass(i)}
                                buttonIndex={i}
                            />
                        </div>);
                })}
            </div>
        )

    }
}
export default Skills;