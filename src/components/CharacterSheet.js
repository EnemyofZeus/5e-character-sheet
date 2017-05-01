var React = require('react');
var LeftColumn = require('./LeftColumn');
class CharacterSheet extends React.Component {
  render(){
    var character = {
      "name":"Stan",
      "class":"Barbarian",
      "level":1,
      "alignment":"Chaotic Good",
      "experience":225,
      "stats":[
        {
          "name":"Strength",
          "score":16,
          "modifier":3
        },
        {
          "name":"Dexterity",
          "score":9,
          "modifier":-1
        },
        {
          "name":"Constitution",
          "score": 15,
          "modifier": 2
        },
        {
          "name":"Intelligence",
          "score": 11,
          "modifier":0
        },
        {
          "name": "Wisdom",
          "score": 13,
          "modifier": 1
        },
        {
          "name": "Charisma",
          "score": 14,
          "modifier": 2
        }
      ],
      "inspiration":0,
      "proficiency":2,
      "savingThrows":[
        {
          "name":"Strength",
          "proficient":true,
          "modifier": 5
        },
        {
          "name":"Dexterity",
          "proficient":false,
          "modifier":-1
        },
        {
          "name":"Constitution",
          "proficient":true,
          "modifier":4
        },
        {
          "name":"Intelligence",
          "proficient":false,
          "modifier": 0
        },
        {
          "name":"Wisdom",
          "proficient":false,
          "modifier":1
        },
        {
          "name":"Charisma",
          "proficient":false,
          "modifier":2
        }
      ],
      "skills":[
        {
          "name":"Acrobatics",
          "stat":"Dex",
          "modifier":-1,
          "proficient":false
        },
        {
          "name":"Animal Handling",
          "stat":"Wis",
          "modifier":1,
          "proficient":false
        },
        {
          "name":"Arcana",
          "stat":"Int",
          "modifier":0,
          "proficient":false
        },
        {
          "name":"Athletics",
          "stat":"Str",
          "modifier":5,
          "proficient":true
        }
      ]
    }
    return (


  //top row info

  //left column stats
    <LeftColumn
      stats={character.stats}
      inspiration={character.inspiration}
      proficiency={character.proficiency}
      savingThrows={character.savingThrows}/>
  //middle column combat

  //right column background/feats
    )
  }
}

module.exports = CharacterSheet;
