import React from 'react'

const ItemsWrapper = ({count}) => (
  <div>
    {[...new Array(10000)].map((v, index) => (
      <span key={index}>Item {count}</span>
    ))}
  </div>
);
class App extends React.Component {
  state = {count: 0};
  startTime;
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.startTime = new Date().getTime();

    setTimeout(() => {
      this.setState({count: 1});
      console.log('first', new Date().getTime() - this.startTime);
    }, 100);
    setTimeout(() => {
      this.setState({count: 2});
      console.log('second', new Date().getTime() - this.startTime);
    }, 110);
  }

  render() {
    return (
      <div
        style={{
          wordBreak: 'break-word',
        }}>
        <ItemsWrapper count={this.state.count} />
      </div>
    );
  }
}
