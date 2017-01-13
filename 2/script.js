/**
 * Created by user on 13.01.2017.
 */



var World = React.createClass({
    getInitialState: function(){
        return {
            hello: "Stranger"
        };

    },
    handleChange: function (event) {
      console.log(event.target.value);
        var helloMe = (event.target.value=="")?"Stranger":event.target.value;

      this.setState({
          hello: helloMe
      });

    },
    render: function () {
        return (
            <div className="world">
                <input type="text" className="inputClass" onChange={this.handleChange} />
                <h1>Hello, {this.state.hello}</h1>
            </div>
        )
    }
});


ReactDOM.render(
<World />,
    document.getElementById("content")
);