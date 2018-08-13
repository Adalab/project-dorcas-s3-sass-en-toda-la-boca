import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import PropTypes from 'prop-types';

class CardGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        palette: 1,
        typography: 1,
        name: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        photo: '',
        skills: ['CSS', 'html', 'JS'],
      },
      skills: [],
      countSkills: 1,
      divSkills: [0],
    };
    this.returnSkillsInjson = this.returnSkillsInjson.bind(this);
    this.handleRadioColorClick = this.handleRadioColorClick.bind(this);
    this.handleRadioFontClick = this.handleRadioFontClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleLinkedinChange = this.handleLinkedinChange.bind(this);
    this.handleGithubChange = this.handleGithubChange.bind(this);
    this.fileInput = React.createRef();
    this.handleClickInput = this.handleClickInput.bind(this);
    this.handleInputFile = this.handleInputFile.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.handleAddSkills = this.handleAddSkills.bind(this);
    this.handleUpdateSkill = this.handleUpdateSkill.bind(this);
    this.handleRemoveSkills = this.handleRemoveSkills.bind(this);
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    
      .then(function (response) {
        return response.json();
      }
      )
      .then(this.returnSkillsInjson);
  }

  handleRadioColorClick(event){
    if(event.target.value === '1'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 1
        }
      }))
    } else if(event.target.value === '2'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 2
        }
      }))
    } else if(event.target.value === '3'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 3
        }
      }))
    } else if(event.target.value === '4'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          palette: 4
        }
      }))
    }
  }

  handleRadioFontClick(event){
    if(event.target.value === '1'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 1
        }
      }))
    } else if(event.target.value === '2'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 2
        }
      }))
    } else if(event.target.value === '3'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 3
        }
      }))
    } else if(event.target.value === '4'){
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          typography: 4
        }
      }))
    }
  }

  handleNameChange (event) {
    console.log('this event', event.target.value);

    this.setState({
      data: {
        ...this.state.data,
        name: event.target.value,
      }
    })
  }

  handleJobChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        job: event.target.value,
      }
    })
  }

  handleEmailChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        email: event.target.value,
      }
    })
  }

  handleTelChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        phone: event.target.value,
      }
    })
  }

  handleLinkedinChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        linkedin: event.target.value,
      }
    })
  }

  handleGithubChange(event) {
    this.setState({
      data: {
        ...this.state.data,
        github: event.target.value,
      }
    })
  }

  handleActions() {
    const actionToPerform = {
      name: this.handleNameChange,
      job: this.handleJobChange,
      email: this.handleEmailChange,
      phone: this.handleTelChange,
      linkedin: this.handleLinkedinChange,
      github: this.handleGithubChange,
    }
    return actionToPerform;
  }

  handleClickInput(event) {
    console.log('image input', this.fileInput)
    this.fileInput.current.click()
  }

  handleInputFile(event) {
    const fr = new FileReader();

    const loadImage = () => {
      this.setState({
        data: {
          ...this.state.data,
          photo: fr.result,
        }
      });
    }

    console.log(event.target.files[0])
    fr.addEventListener('load', loadImage);
    fr.readAsDataURL(event.target.files[0]);
  }

  handleImage() {
    const chargeImage = {
      input: this.handleInputFile,
      click: this.handleClickInput,
    }
    return chargeImage;
  }

  returnSkillsInjson(json) {
    // console.log(json.skills);
    this.setState({
      skills: json.skills,
    })
  }

  handleSkills(isAdd, index) {
    if (isAdd) this.handleAddSkills();
    if (!isAdd) this.handleRemoveSkills(index);
    console.log('divSkills cuando añade o quita', this.state.divSkills)
    console.log('isAdd', isAdd);
    console.log('index', index);
  }

  handleAddSkills() {
    if (this.state.divSkills.length < 3) {
      this.setState({
        countSkills: this.state.countSkills + 1,
        divSkills: [...this.state.divSkills, this.state.countSkills],
      })
    }
  }

  handleUpdateSkill(event){
    
    console.log('event value',event.target.value);
    console.log('skills', this.state.data.skills);
    const newArraySkills=[];
    // const newArraySkills[index]=event.target.value;
    this.setState({
        data: {
          ...this.state.data,
          skills: newArraySkills
        }
    })
}

  handleRemoveSkills(indexRest) {
    this.setState({
      countSkills: this.state.countSkills - 1,
      divSkills: this.state.divSkills.splice(indexRest, 1),
    })
    console.log('quito', indexRest)
  }

  render() {
    console.log('estado de las skills cuando se renderiza', this.state.divSkills)
    const { 
      data, 
      skills, 
      divSkills 
    } = this.state;
    //console.log('skills???',skills);
    //console.log('this app', this.handleActions)
    // console.log('this.stateeeeee1', this.state);
    return (
      <div className="page__wrapper">
        <Header />
        <Main
          data={data}
          skills={skills}
          addSkills={this.handleAddSkills}
          updateSkill={this.handleUpdateSkill}
          divSkills={this.state.divSkills}
          actionToPerform = {this.handleActions()} 
          chargeImage = {this.handleImage()} 
          inputImage = {this.fileInput}
          handleRadioColorClick= {this.handleRadioColorClick} 
          handleRadioFontClick= {this.handleRadioFontClick} 
          />
      </div>
    );
  }
}

CardGenerator.propTypes = {

  name: PropTypes.string,
  job: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string

};

export default CardGenerator;
