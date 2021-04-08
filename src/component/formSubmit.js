import React, { Component } from 'react'
import { connect } from 'react-redux';
import './form.css';
import { userResult } from '../actions/action';

const initialState = {
    NAME: 'Precious',
    EMAIL: 'udegbue69@gmail.com',
    "EXTRAVERSION": {
        "Overall Score": 45,
        Facets: {
          "Friendliness": 56,
        "Gregariousness": 55,
        "Assertiveness": 34,
        "Activity Level": 60,
        "Excitement-Seeking": 17,
        "Cheerfulness" : 57 
        }
    },

    "AGREEABLENESS": {
      "Overall Score": 93,
      Facets: {
        "Trust": 61,
        "Morality": 89,
        "Altruism": 95,
        "Cooperation": 80,
        "Modesty": 45,
        "Sympathy" : 99
      }
  },

  "CONSCIENTIOUSNESS": {
    "Overall Score": 88,
    Facets: {
      "Self-Efficacy": 52,
      "Orderliness": 98,
      "Dutifulness": 88,
      "Achievement-Striving": 66,
      "Self-Discipline": 68,
      "Cautiousness" : 72
    }
},

"NEUROTICISM": {
  "Overall Score": 7,
  Facets: {
    "Anxiety": 12,
    "Anger": 27,
    "Depression": 38,
    "Self-Consciousness": 1,
    "Immoderation": 12,
    "Vulnerability" : 19
  }
},

"OPENNESS TO EXPERIENCE": {
  "Overall Score": 40,
  Facets: {
    "Imagination": 19,
    "Artistic Interests": 60,
    "Emotionality": 65,
    "Adventurousness": 38,
    "Intellect": 18,
    "Liberalism" : 62,
  }
},
}


class FormSubmit extends Component {
    constructor(props){
        super(props);

        this.state = initialState;

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleExtraversion = this.handleExtraversion.bind(this);
        // this.handleAgreeableness = this.handleAgreeableness.bind(this);
    }

    handleSubmit = e => {
      const { sendResult } = this.props
        e.preventDefault();
        console.log(this.state)
        sendResult(this.state)
      };

  //   handleChange = e => {
  //       e.preventDefault();
  //       this.setState({
  //         [e.target.id]: e.target.value,
  //       });
  //     };

  // // EXTRAVERSION

  // handleExtraversion = e => {
  //   const { EXTRAVERSION } = this.state;
  //   const Facet = EXTRAVERSION.Facets
  //   const score = document.querySelector('.score')
  //   const greg = document.querySelector('.greg')
  //   const friend = document.querySelector('.friend')
  //   const assert = document.querySelector('.assert')
  //   const activity = document.querySelector('.activity')
  //   const excite = document.querySelector('.excite')
  //   const cheer = document.querySelector('.cheer')
  //   EXTRAVERSION['Overall Score'] = score.value;
  //   Facet['Friendliness'] = friend.value
  //   Facet['Gregariousness'] = greg.value
  //   Facet['Assertiveness'] = assert.value
  //   Facet['Activity Level'] = activity.value
  //   Facet['Excitement-Seeking'] = excite.value
  //   Facet['Cheerfulness'] = cheer.value
  //   this.setState({
  //     EXTRAVERSION,
  //   });
  // }

  // //AGREEABLENESS

  // handleAgreeableness = e => {
  //   const { AGREEABLENESS } = this.state;
  //   const Facet = AGREEABLENESS.Facets
  //   const score = document.querySelector('.agreeScore')
  //   const trust = document.querySelector('.trust')
  //   const moral = document.querySelector('.moral')
  //   const altrue = document.querySelector('.altrue')
  //   const coop = document.querySelector('.coop')
  //   const modest = document.querySelector('.modest')
  //   const sympathy = document.querySelector('.sympathy')
  //   AGREEABLENESS['Overall Score'] = score.value;
  //   Facet['Trust'] = trust.value
  //   Facet['Morality'] = moral.value
  //   Facet['Altruism'] = altrue.value
  //   Facet['Cooperation'] = coop.value
  //   Facet['Modesty'] = modest.value
  //   Facet['Sympathy'] = sympathy.value
  //   this.setState({
  //     AGREEABLENESS,
  //   });
  // }

  // // CONSCIENTIOUSNESS

  // handleConscientiousness = e => {
  //   const { CONSCIENTIOUSNESS } = this.state;
  //   const Facet = CONSCIENTIOUSNESS.Facets
  //   const score = document.querySelector('.OverScore')
  //   const efficacy = document.querySelector('.efficacy')
  //   const orderly = document.querySelector('.orderly')
  //   const dutiful = document.querySelector('.dutiful')
  //   const achievement = document.querySelector('.achievement')
  //   const discipline = document.querySelector('.discipline')
  //   const cautious = document.querySelector('.cautious')
  //   CONSCIENTIOUSNESS['Overall Score'] = score.value;
  //   Facet['Self-Efficacy'] = efficacy.value
  //   Facet['Orderliness'] = orderly.value
  //   Facet['Dutifulness'] = dutiful.value
  //   Facet['Achievement-Striving'] = achievement.value
  //   Facet['Self-Discipline'] = discipline.value
  //   Facet['Cautiousness'] = cautious.value
  //   this.setState({
  //     CONSCIENTIOUSNESS,
  //   });
  // }

  // // NEUROTICISM

  // handleNeuroticism = e => {
  //   const { NEUROTICISM } = this.state;
  //   const Facet = NEUROTICISM.Facets
  //   const score = document.querySelector('.neuroScore')
  //   const anxiety = document.querySelector('.anxiety')
  //   const anger = document.querySelector('.anger')
  //   const dutiful = document.querySelector('.dutiful')
  //   const achievement = document.querySelector('.achievement')
  //   const discipline = document.querySelector('.discipline')
  //   const cautious = document.querySelector('.cautious')
  //   NEUROTICISM['Overall Score'] = score.value;
  //   Facet['Anxiety'] = anxiety.value
  //   Facet['Anger'] = anger.value
  //   Facet['Depression'] = dutiful.value
  //   Facet['Self-Consciousness'] = achievement.value
  //   Facet['Immoderation'] = discipline.value
  //   Facet['Vulnerability'] = cautious.value
  //   this.setState({
  //     NEUROTICISM,
  //   });
  // }


    render() {
        return (
            // <div className='formDiv'>
            //     <form>
            //     <div className="">
            //     <p style={{ color: 'white', marginBottom: '10px', fontWeight: '700'}}>Personal Information</p>
            //   <label htmlFor="email" className="email">
            //     Email
            //     <input
            //       id="email"
            //       autoComplete="off"
                  
            //       type="email"
            //       onChange={this.handleChange}
            //       placeholder="Email"
            //       value='udegbue69@gmail.com'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="name" className="email">
            //     name
            //     <input
            //       id="name"
            //       autoComplete="off"
                  
            //       type="text"
            //       value='Precious'
            //       onChange={this.handleChange}
            //       className="login-input"
            //       placeholder="name"
            //     />
            //   </label>
            // </div>

            // <div className="control">
            // <p style={{ color: 'cyan', marginBottom: '10px', fontWeight: '700'}}>EXTRAVERSION</p>
            //   <label htmlFor="Overall Score" className="email">
            //     overall score
            //     <input
            //       id='Overall Score'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleExtraversion}
            //       placeholder="overall score"
            //       className='score'
            //     />
            //   </label>
            // </div>
            // <div className="control">
            //   <label htmlFor="Friendliness" className="email">
            //     Friendliness
            //     <input
            //       id='Friendliness'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleExtraversion}
            //       placeholder="Friendliness"
            //       className='friend'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Gregariousness" className="email">
            //     Gregariousness
            //     <input
            //       id='Gregariousness'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleExtraversion}
            //       placeholder="Gregariousness"
            //       className='greg'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Assertiveness" className="email">
            //     Assertiveness
            //     <input
            //       id='Assertiveness'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleExtraversion}
            //       placeholder="Assertiveness"
            //       className='assert'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Activity Level" className="email">
            //     Activity Level
            //     <input
            //       id='Activity Level'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleExtraversion}
            //       placeholder="Activity Level"
            //       className='activity'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Excitement-Seeking" className="email">
            //     Excitement-Seeking
            //     <input
            //       id='Excitement-Seeking'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleExtraversion}
            //       placeholder="Excitement-Seeking"
            //       className='excite'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Cheerfulness" className="email">
            //     Cheerfulness
            //     <input
            //       id='Cheerfulness'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleExtraversion}
            //       placeholder="Cheerfulness"
            //       className='cheer'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            // <p style={{ color: 'cyan', marginBottom: '10px', fontWeight: '700'}}>AGREEABLENESS</p>
            //   <label htmlFor="Overall Score" className="email">
            //     overall score
            //     <input
            //       id='Overall Score'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleAgreeableness}
            //       placeholder="overall score"
            //       className='agreeScore'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Trust" className="email">
            //     Trust
            //     <input
            //       id='Trust'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleAgreeableness}
            //       placeholder="Trust"
            //       className='trust'
            //     />
            //   </label>
            // </div>
            
            // <div className="control">
            //   <label htmlFor="Morality" className="email">
            //     Morality
            //     <input
            //       id='Morality'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleAgreeableness}
            //       placeholder="Morality"
            //       className='moral'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Altruism" className="email">
            //     Altruism
            //     <input
            //       id='Altruism'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleAgreeableness}
            //       placeholder="Altruism"
            //       className='altrue'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Cooperation" className="email">
            //     Cooperation
            //     <input
            //       id='Cooperation'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleAgreeableness}
            //       placeholder="Cooperation"
            //       className='coop'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Modesty" className="email">
            //     Modesty
            //     <input
            //       id='Modesty'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleAgreeableness}
            //       placeholder="Modesty"
            //       className='modest'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Sympathy" className="email">
            //     Sympathy
            //     <input
            //       id='Sympathy'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleAgreeableness}
            //       placeholder="Sympathy"
            //       className='sympathy'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            // <p style={{ color: 'cyan', marginBottom: '10px', fontWeight: '700'}}>CONSCIENTIOUSNESS</p>
            //   <label htmlFor="Overall Score" className="email">
            //     overall score
            //     <input
            //       id='Overall Score'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleConscientiousness}
            //       placeholder="overall score"
            //       className='OverScore'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Self-Efficacy" className="email">
            //     Self-Efficacy
            //     <input
            //       id='Self-Efficacy'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleConscientiousness}
            //       placeholder="Self-Efficacy"
            //       className='efficacy'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Orderliness" className="email">
            //     Orderliness
            //     <input
            //       id='Orderliness'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleConscientiousness}
            //       placeholder="Orderliness"
            //       className='orderly'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Dutifulness" className="email">
            //     Dutifulness
            //     <input
            //       id='Dutifulness'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleConscientiousness}
            //       placeholder="Dutifulness"
            //       className='dutiful'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Achievement-Striving" className="email">
            //     Achievement-Striving
            //     <input
            //       id='Achievement-Striving'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleConscientiousness}
            //       placeholder="Achievement-Striving"
            //       className='achievement'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Self-Discipline" className="email">
            //     Self-Discipline
            //     <input
            //       id='Self-Discipline'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleConscientiousness}
            //       placeholder="Self-Discipline"
            //       className='discipline'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Cautiousness" className="email">
            //     Cautiousness
            //     <input
            //       id='Cautiousness'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleConscientiousness}
            //       placeholder="Cautiousness"
            //       className='cautious'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            // <p style={{ color: 'cyan', marginBottom: '10px', fontWeight: '700'}}>NEUROTICISM</p>
            //   <label htmlFor="Overall Score" className="email">
            //     Overall Score
            //     <input
            //       id='Overall Score'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleNeuroticism}
            //       placeholder="Overall Score"
            //       className='neuroScore'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Anxiety" className="email">
            //     Anxiety
            //     <input
            //       id='Anxiety'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleNeuroticism}
            //       placeholder="Anxiety"
            //       className='anxiety'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <label htmlFor="Anger" className="email">
            //     Anger
            //     <input
            //       id='Anger'
            //       autoComplete="off"
                  
            //       type="number"
            //       onChange={this.handleNeuroticism}
            //       placeholder="Anger"
            //       className='anger'
            //     />
            //   </label>
            // </div>

            // <div className="control">
            //   <button type="submit" onSubmit={this.handleSubmit} className="login-button">
            //     Submit
            //   </button>
            // </div>
            //     </form>
           // </div>

           <button type="submit" onClick={this.handleSubmit} className="login-button">
            Submit
            </button>
        )
    }
}

const mapStateToProps = state => {
  return {
    result: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return{
    sendResult: userInfo => dispatch(userResult(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSubmit);