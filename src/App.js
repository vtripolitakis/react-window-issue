import React, { Component } from 'react';
import './App.css';
import VTable from './VTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allExpanded: true,
      MyData: [
      {normal:'lorem ipsum', expandedData: 'blahblabhlabhablh', offset: 1, expandedState:false},
      {normal:'lorem ipsum!', expandedData: 'blahblabhalba asdahsdkjahsdk ljahs kdjlah skjldh akjlhsd kjlah sdkjlah kjsldh akjlhsdkjlahs', offset: 2, expandedState:false},
      {normal:'lorem ipsum@', expandedData: 'blahblabhlabhablh', offset: 3, expandedState:false},
      {normal:'lorem ipsum', expandedData: 'blahblabhlabhablh', offset: 4, expandedState:false},
      {normal:'lorem ipsum!!', expandedData: 'blahblabhalba asdahsdkjahsdk ljahs kdjlah skjldh akjlhsd kjlah sdkjlah kjsldh akjlhsdkjlahs', offset: 5, expandedState:false},
      {normal:'lorem ipsum@', expandedData: 'blahblabhlabhablh', offset: 6, expandedState:false},
      {normal:'lorem ipsum', expandedData: 'blahblabhlabhablh', offset: 7, expandedState:false},
      {normal:'lorem ipsum!!!', expandedData: 'blahblabhalba asdahsdkjahsdk ljahs kdjlah skjldh akjlhsd kjlah sdkjlah kjsldh akjlhsdkjlahs', offset: 8, expandedState:false},
      {normal:'lorem ipsum@', expandedData: 'blahblabhlabhablh', offset: 9, expandedState:false},
      {normal:'lorem ipsum', expandedData: 'blahblabhlabhablh', offset: 10, expandedState:false},
      {normal:'lorem ipsum!!!!', expandedData: 'blahblabhalba asdahsdkjahsdk ljahs kdjlah skjldh akjlhsd kjlah sdkjlah kjsldh akjlhsdkjlahs', offset: 11, expandedState:false},
      {normal:'lorem ipsum@', expandedData: 'blahblabhlabhablh', offset: 12, expandedState:false},
      {normal:'lorem ipsum', expandedData: 'blahblabhlabhablh', offset: 13, expandedState:false},
      {normal:'lorem ipsum!!!!!', expandedData: 'blahblabhalba asdahsdkjahsdk ljahs kdjlah skjldh akjlhsd kjlah sdkjlah kjsldh akjlhsdkjlahs', offset: 14, expandedState:false},
      {normal:'lorem ipsum@', expandedData: 'blahblabhlabhablh', offset: 15, expandedState:false},
    ]};
    this.expandHandler = this.expandHandler.bind(this);
    this.expandAllToggle = this.expandAllToggle.bind(this);
  }

  expandHandler = e => {
    const newState = Object.assign({}, this.state);
    newState.MyData = newState.MyData.map(i=>{
      if (i.offset === e){
        i.expandedState = !i.expandedState;
        return i;
      }
      return i
    })
    this.setState(newState);
  };

  expandAllToggle = () => {
    const newState = Object.assign({}, this.state);
    newState.MyData = newState.MyData.map(i=>{
        i.expandedState = this.state.allExpanded;
        return i;
      });
    newState.allExpanded = !newState.allExpanded;
    this.setState(newState);
  }

  render() {
    return <div>
      <VTable
            expandHandler={this.expandHandler}
            expandAllToggle={this.expandAllToggle}
            data={this.state.MyData}/>
    </div>
  }
}

export default App;
