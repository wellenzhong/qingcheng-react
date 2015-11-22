var React = require('react');
var Reflux = require('reflux');
var Header = require('./Header');
var TopicList = require('./TopicList');
var FetchStore = require('../stores/FetchStore');
var TimelineActions = require('../actions/TimelineActions');
var TimelineStore = require('../stores/TimelineStore');

var HomePage = React.createClass({
    mixins: [
        Reflux.connect(FetchStore, "fetching"),
        Reflux.connect(TimelineStore, "topics")
    ],
	componentDidMount: function(){
        TimelineActions.fetchTimeline(this.props.location.query);
	},
    render: function() {
        return (
            <div className="home-view">
                <Header title="Python China" description="Welcome to Python China" path="home" />
                <div className="body">
					<div className="split-view container">
					  <div className="main-view">
						<TopicList topics={this.state.topics} />
					  </div>
					  <div className="sidebar-view">
						<div className="widget">
						  <a className="button button--green">New Topic</a>
						</div>
						<div className="site-sidebar"></div>
					  </div>
					</div>
                </div>
            </div>
        );
    }
});

module.exports = HomePage;