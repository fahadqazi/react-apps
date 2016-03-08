//show a button and list
//component should know ehen to show list

var React = require('react');
var Button = require('./Button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick:function(){
    this.setState({open : !this.state.open});
  },
  getInitialState: function(){
    return {open:false}
  },
  handleItemClick: function(item){
    this.setState({
      open: false,
      itemTitle: item
    });
  },
  render:function(){
    var list = this.props.items.map(function(item){
      return <ListItem item={item}
      whenItemClicked={this.handleItemClick}
      className = {this.state.itemTitle === item ? "active": ""}
      />
    }.bind(this));

    return <div className="dropdown">
            <Button WhenClicked={this.handleClick}
            className="btn-default"
            title={this.state.itemTitle || this.props.title}
            subTitleClassName="caret"/>

            <ul className={"dropdown-menu " + (this.state.open ? "show": "")}>
              {list}
            </ul>
          </div>;
  }
});
