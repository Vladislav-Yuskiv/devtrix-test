import { createAction } from '@reduxjs/toolkit';


const headerText = createAction('firstTab/changeHeaderText');
const descriptionText = createAction('firstTab/changeDescriptionText');
const status = createAction('firstTab/changeStatus');

const email = createAction('secondTab/changeEmail');
const phone = createAction('secondTab/changePhone');

const photos = createAction('thirdTab/changePhotos');

const paidServices = createAction('forthTab/changeServices');


const formActions = { headerText, descriptionText, status , email , phone , photos , paidServices};
export default formActions;
