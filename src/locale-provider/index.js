import React from 'react';
import { Provider } from './HrContext';
import zh_CN from './zh_CN';
import en_US from './en_US';

const langs = {
  zh_CN,
  en_US,
};

export default class LocaleProvider extends React.Component {
  render() {
    console.log();
    return (
      <Provider value={langs[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </Provider>
    );
  }
}
