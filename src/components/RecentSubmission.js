import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.lastLine }</p>
    </div>
  );
}

RecentSubmission.PropTypes = {
  lastLine: PropTypes.string.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
}

export default RecentSubmission;
