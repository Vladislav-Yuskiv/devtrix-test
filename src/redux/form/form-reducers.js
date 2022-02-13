import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './form-actions';

const header = createReducer(' ', {
     [actions.headerText]: ( _, { payload }) => payload,
});
const description = createReducer(' ', {
     [actions.descriptionText]: ( _, { payload }) => payload,
});

const status = createReducer('Off', {
     [actions.status]: ( _, { payload }) => payload,
});

const email = createReducer('', {
     [actions.email]: ( _, { payload }) => payload,
});

const phone = createReducer('', {
     [actions.phone]: ( _, { payload }) => payload,
});

const photos = createReducer([], {
     [actions.photos]: ( _, { payload }) => payload,
});

const paidServices = createReducer([], {
     [actions.paidServices]: ( _, { payload }) => payload,
});

export default combineReducers({
     header,
     description,
     status,
     email,
     phone ,
     photos ,
     paidServices
});

