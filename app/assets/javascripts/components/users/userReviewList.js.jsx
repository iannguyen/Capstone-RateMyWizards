(function(root) {
  'use strict';

  root.ReviewList = React.createClass({
    getInitialState: function() {
      return { reviews: this.props.reviews };
    },

    render: function() {
      var that = this;
      return(
        <div className="user-reviews">
          <h2>My Reviews</h2>
          <ul className="review-list">
            {
              this.props.reviews.map(function(review) {
                return <ReviewItem key={review.id} review={review} />;
              })
            }
          </ul>
        </div>
      );
    }
  });

}(this));