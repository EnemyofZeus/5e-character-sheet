var React = require('react');

class StatBox extends React.Component{
  render(){
    var modifier = (this.props.stat.score - 10)/2;
    console.log(this.props)
    return (
      <div className='modifier'>

        {modifier}
        
      </div>
    )
  }
}

module.exports = StatBox
