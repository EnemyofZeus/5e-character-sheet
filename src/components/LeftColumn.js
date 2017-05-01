var React = require('react');
var Stats = require('./Stats')

class LeftColumn extends React.Component {
  render(){

    return(
      <div className='column'>
        <div className='upper'>
          <Stats stats={this.props.stats} />
          {/* <Inspiration />
          <Proficiency />
          <SavingThrows />
          <Skills />
        </div> */}
        <div className='lower'>

        </div>
      </div>
    </div>
    )
  }
}

module.exports = LeftColumn;
