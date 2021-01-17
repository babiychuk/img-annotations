import React, { Component } from "react";
import Annotation from "react-image-annotation";
import { PointSelector } from "react-image-annotation/lib/selectors";

export default class Anotation extends Component {
  state = {
    type: PointSelector.TYPE,
    annotations: [],
    annotation: {},
  };

  onChange = (annotation) => {
    this.setState({ annotation });
  };

  onSubmit = (annotation) => {
    const { geometry, data } = annotation;

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random(),
        },
      }),
    });
  };

  render() {
    return (
      <div>
        <Annotation
          src={this.props.img}
          alt="Two pebbles anthropomorphized holding hands"
          annotations={this.state.annotations}
          type={this.state.type}
          value={this.state.annotation}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
