import React, { Component } from 'react'
import './form.css';

const initialState = {
    name: 'Precious',
    email: 'udegbue69@gmail.com',
    "EXTRAVERSION": {
        "Overall Score": '',
        Facets: {
          "Friendliness": '',
        "Gregariousness": '',
        "Assertiveness": '',
        "Activity Level": '',
        "Excitement-Seeking": '',
        "Cheerfulness" : '' 
        }
    },

    "AGREEABLENESS": {
      "Overall Score": '',
      Facets: {
        "Trust": '',
        "Morality": '',
        "Altruism": '',
        "Cooperation": '',
        "Modesty": '',
        "Sympathy" : ''
      }
  },

  "CONSCIENTIOUSNESS": {
    "Overall Score": '',
    Facets: {
      "Self-Efficacy": '',
      "Orderliness": '',
      "Dutifulness": '',
      "Achievement-Striving": '',
      "Self-Discipline": '',
      "Cautiousness" : ''
    }
},
}


class FormSubmit extends Component {
    constructor(props){
        super(props);

        this.state = initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleExtraversion = this.handleExtraversion.bind(this);
        this.handleAgreeableness = this.handleAgreeableness.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
      };

    handleChange = e => {
        e.preventDefault();
        this.setState({
          [e.target.id]: e.target.value,
        });
      };

  // EXTRAVERSION

  handleExtraversion = e => {
    const { EXTRAVERSION } = this.state;
    const Facet = EXTRAVERSION.Facets
    const score = document.querySelector('.score')
    const greg = document.querySelector('.greg')
    const friend = document.querySelector('.friend')
    const assert = document.querySelector('.assert')
    const activity = document.querySelector('.activity')
    const excite = document.querySelector('.excite')
    const cheer = document.querySelector('.cheer')
    EXTRAVERSION['Overall Score'] = score.value;
    Facet['Friendliness'] = friend.value
    Facet['Gregariousness'] = greg.value
    Facet['Assertiveness'] = assert.value
    Facet['Activity Level'] = activity.value
    Facet['Excitement-Seeking'] = excite.value
    Facet['Cheerfulness'] = cheer.value
    this.setState({
      EXTRAVERSION,
    });
  }

  //AGREEABLENESS

  handleAgreeableness = e => {
    const { AGREEABLENESS } = this.state;
    const Facet = AGREEABLENESS.Facets
    const score = document.querySelector('.agreeScore')
    const trust = document.querySelector('.trust')
    const moral = document.querySelector('.moral')
    const altrue = document.querySelector('.altrue')
    const coop = document.querySelector('.coop')
    const modest = document.querySelector('.modest')
    const sympathy = document.querySelector('.sympathy')
    AGREEABLENESS['Overall Score'] = score.value;
    Facet['Trust'] = trust.value
    Facet['Morality'] = moral.value
    Facet['Altruism'] = altrue.value
    Facet['Cooperation'] = coop.value
    Facet['Modesty'] = modest.value
    Facet['Sympathy'] = sympathy.value
    this.setState({
      AGREEABLENESS,
    });
  }

  // CONSCIENTIOUSNESS

  handleConscientiousness = e => {
    const { CONSCIENTIOUSNESS } = this.state;
    const Facet = CONSCIENTIOUSNESS.Facets
    const score = document.querySelector('.agreeScore')
    const trust = document.querySelector('.trust')
    const friend = document.querySelector('.friend')
    CONSCIENTIOUSNESS['Overall Score'] = score.value;
    Facet['Trust'] = trust.value
    Facet['Morality'] = trust.value
    Facet['Altruism'] = trust.value
    Facet['Cooperation'] = trust.value
    Facet['Modesty'] = trust.value
    Facet['Sympathy'] = trust.value
    this.setState({
      CONSCIENTIOUSNESS,
    });
  }


    render() {
        return (
            <div className='formDiv'>
                <form onSubmit={this.handleSubmit}>
                <div className="">
                <p style={{ color: 'white', marginBottom: '10px', fontWeight: '700'}}>Personal Information</p>
              <label htmlFor="email" className="email">
                Email
                <input
                  id="email"
                  autoComplete="off"
                  required
                  type="email"
                  onChange={this.handleChange}
                  placeholder="Email"
                  value='udegbue69@gmail.com'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="name" className="email">
                name
                <input
                  id="name"
                  autoComplete="off"
                  required
                  type="text"
                  value='Precious'
                  onChange={this.handleChange}
                  className="login-input"
                  placeholder="name"
                />
              </label>
            </div>

            <div className="control">
            <p style={{ color: 'cyan', marginBottom: '10px', fontWeight: '700'}}>EXTRAVERSION</p>
              <label htmlFor="Overall Score" className="email">
                overall score
                <input
                  id='Overall Score'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleExtraversion}
                  placeholder="overall score"
                  className='score'
                />
              </label>
            </div>
            <div className="control">
              <label htmlFor="Friendliness" className="email">
                Friendliness
                <input
                  id='Friendliness'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleExtraversion}
                  placeholder="Friendliness"
                  className='friend'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Gregariousness" className="email">
                Gregariousness
                <input
                  id='Gregariousness'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleExtraversion}
                  placeholder="Gregariousness"
                  className='greg'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Assertiveness" className="email">
                Assertiveness
                <input
                  id='Assertiveness'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleExtraversion}
                  placeholder="Assertiveness"
                  className='assert'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Activity Level" className="email">
                Activity Level
                <input
                  id='Activity Level'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleExtraversion}
                  placeholder="Activity Level"
                  className='activity'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Excitement-Seeking" className="email">
                Excitement-Seeking
                <input
                  id='Excitement-Seeking'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleExtraversion}
                  placeholder="Excitement-Seeking"
                  className='excite'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Cheerfulness" className="email">
                Cheerfulness
                <input
                  id='Cheerfulness'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleExtraversion}
                  placeholder="Cheerfulness"
                  className='cheer'
                />
              </label>
            </div>

            <div className="control">
            <p style={{ color: 'cyan', marginBottom: '10px', fontWeight: '700'}}>AGREEABLENESS</p>
              <label htmlFor="Overall Score" className="email">
                overall score
                <input
                  id='Overall Score'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleAgreeableness}
                  placeholder="overall score"
                  className='agreeScore'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Trust" className="email">
                Trust
                <input
                  id='Trust'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleAgreeableness}
                  placeholder="Trust"
                  className='trust'
                />
              </label>
            </div>
            
            <div className="control">
              <label htmlFor="Morality" className="email">
                Morality
                <input
                  id='Morality'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleAgreeableness}
                  placeholder="Morality"
                  className='moral'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Altruism" className="email">
                Altruism
                <input
                  id='Altruism'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleAgreeableness}
                  placeholder="Altruism"
                  className='altrue'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Cooperation" className="email">
                Cooperation
                <input
                  id='Cooperation'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleAgreeableness}
                  placeholder="Cooperation"
                  className='coop'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Modesty" className="email">
                Modesty
                <input
                  id='Modesty'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleAgreeableness}
                  placeholder="Modesty"
                  className='modest'
                />
              </label>
            </div>

            <div className="control">
              <label htmlFor="Sympathy" className="email">
                Sympathy
                <input
                  id='Sympathy'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleAgreeableness}
                  placeholder="Sympathy"
                  className='sympathy'
                />
              </label>
            </div>

            <div className="control">
            <p style={{ color: 'cyan', marginBottom: '10px', fontWeight: '700'}}>CONSCIENTIOUSNESS</p>
              <label htmlFor="Overall Score" className="email">
                overall score
                <input
                  id='Overall Score'
                  autoComplete="off"
                  required
                  type="number"
                  onChange={this.handleAgreeableness}
                  placeholder="overall score"
                  className='agreeScore'
                />
              </label>
            </div>

            <div className="control">
              <button type="submit" className="login-button">
                Submit
              </button>
            </div>
                </form>
            </div>
        )
    }
}


export default FormSubmit;