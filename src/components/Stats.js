var React = require('react');
var StatBox = require('./StatBox');

class Stats extends React.Component{
  render(){
    console.log(this.props.stats)
    return (
      <ul>

        {this.props.stats.map(function(stat){
          return(
            <li>
              {stat.name}
              {stat.modifier}
              {stat.score}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Stats
