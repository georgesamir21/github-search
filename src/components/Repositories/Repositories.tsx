import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';

const Repositories = (props: Props) => (
  <div>
    <p>Reposatories Component Works!</p>
    <p>{props.reposatories.length}</p>
  </div>
);

interface LinkedStateProps {
  reposatories: any;
  textFilter: string;
}

type Props = LinkedStateProps;

const mapStateToProps = (state: AppState) => {
  return {
    reposatories: state.reposatories,
    textFilter: state.filter.textFilter,
  };
};

export default connect(mapStateToProps)(Repositories);
