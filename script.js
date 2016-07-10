// each branch will be a different video in the tutorial found here
// https://app.pluralsight.com/player?course=react-js-getting-started&author=samer-buna&name=react-js-getting-started-m3&clip=2&mode=live

// video: The Main Game Component

var Game = React.createClass({
  render: function() {
    return (
      <div id="game">
        <h2>Play Nein</h2>
      </div>
    )
  }
})



ReactDOM.render(<Game />,document.getElementById('container'));
