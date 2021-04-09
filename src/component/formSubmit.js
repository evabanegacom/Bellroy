import React, { Component } from "react";
import { connect } from "react-redux";
import "./form.css";
import { userResult } from "../actions/action";

const initialState = {
  "NAME":"Precious",
  "EMAIL":"udegbue69@gmail.com",
  "EXTRAVERSION": {
    "Overall Score":45,
    "Facets": {
      "Friendliness":56,
      "Gregariousness":55,
      "Assertiveness":34,
      "Activity Level":60,
      "Excitement-Seeking":17,
      "Cheerfulness":57
    }
  },
  "AGREEABLENESS": {
    "Overall Score":93,
    "Facets": {
      "Trust":61,
      "Morality":89,
      "Altruism":95,
      "Cooperation":80,
      "Modesty":45,
      "Sympathy":99
    }
  },
  "CONSCIENTIOUSNESS": {
    "Overall Score":88,
    "Facets": {
      "Self-Efficacy":52,
      "Orderliness":98,
      "Dutifulness":88,
      "Achievement-Striving":66,
      "Self-Discipline":68,
      "Cautiousness":72
    }
  },
  "NEUROTICISM": {
    "Overall Score":7,
    "Facets": {
      "Anxiety":12,
      "Anger": 27,
      "Depression":38,
      "Self-Consciousness":1,
      "Immoderation": 12,
      "Vulnerability": 19
    }
  },
  "OPENNESS TO EXPERIENCE": {
    "Overall Score": 40,
    "Facets": {
      "Imagination":19,
      "Artistic Interests":60,
      "Emotionality": 65,
      "Adventurousness":38,
      "Intellect": 18,
      "Liberalism": 62
    }
  },
};

class FormSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    const { sendResult } = this.props;
    e.preventDefault();
    console.log(this.state);
    sendResult(this.state);
  };

  render() {
    return (
      <button
        type="submit"
        onClick={this.handleSubmit}
        className="login-button"
      >
        Submit
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendResult: (userInfo) => dispatch(userResult(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSubmit);
