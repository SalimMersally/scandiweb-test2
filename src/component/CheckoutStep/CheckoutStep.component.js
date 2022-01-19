import React, { Component } from "react";
import "./CheckoutStep.style";

export class CheckoutStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: "",
    };
  }

  componentDidMount() {
    let currentIndex = 0;

    this.props.steps.forEach((element, index) => {
      if (element.step === this.props.current) {
        currentIndex = index;
      }
    });

    this.setState({ currentIndex });
  }

  componentDidUpdate(prevProps) {
    if (this.props.current !== prevProps.current) {
      let currentIndex = 0;

      this.props.steps.forEach((element, index) => {
        if (element.step === this.props.current) {
          currentIndex = index;
        }
      });

      this.setState({ currentIndex });
    }
  }

  render() {
    const { steps } = this.props;
    return (
      <div>
        <div className="steps">
          {steps.map((step, index) => {
            if (index === steps.length - 1) {
              let style = "notReached";

              if (index <= this.state.currentIndex) {
                style = "reached";
              }

              return (
                <div className="step">
                  <div className="stepLine">
                    <div className={"main " + style}></div>
                    <div className={"shrink" + style}></div>
                  </div>
                </div>
              );
            }

            let style = "notReached";
            let text = index + 1;

            if (index <= this.state.currentIndex) {
              style = "reached";
            }

            if (index < this.state.currentIndex) {
              text = "✅";
            }

            return (
              <div className="step">
                <div className="stepLine">
                  <div className={"main " + style}></div>
                  <div className={"shrink" + style}></div>
                </div>
                <div className={"stepIndex " + style}>{text}</div>
              </div>
            );
          })}
        </div>
        <div className="stepNames">
          {steps.map((step, index) => {
            if (index === steps.length - 1) {
              return (
                <div className="stepName">
                  <hr className="space" />
                </div>
              );
            }
            return (
              <div className="stepName">
                <hr className="space" />
                <div className="name">
                  <p>{step.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CheckoutStep;
