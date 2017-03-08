/* @flow */
import type { CreateTemplate } from '../../src/types';

module.exports = (createTemplate: CreateTemplate) => createTemplate`
/* @flow */

import React, { Component, PropTypes } from "react";
import Helmet from "react-helmet";
import { BodyAttributes } from "gluestick-shared";
import "compiled/normalize.css";

/**
 * The index html will be generated from this file. You can customize things as
 * you see fit. 'body' and 'head will be generated by the server and you
 * should not remove those or the application will likely stop working.
 */
export default class Index extends Component {
  static propTypes = {
    head: PropTypes.any.isRequired,
    body: PropTypes.any.isRequired,
  };

  render () {
    const {
      head,
      body
    } = this.props;

    const helmet = Helmet.rewind();
    const bodyAttributes = BodyAttributes.rewind();

    return (
      <html lang="en-US">
        <head>
          {helmet.base.toComponent()}
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {helmet.script.toComponent()}
          {helmet.style.toComponent()}
          {head /* DO NOT REMOVE */}
        </head>
        <body {...bodyAttributes}>
          {body /* DO NOT REMOVE */}
        </body>
      </html>
    );
  }
}
`;
