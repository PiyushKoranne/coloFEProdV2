import React from 'react';
import { HostedForm } from 'react-acceptjs';
import ResponseBlock from './ResponseBlock';

const authData = {
	apiLoginID: '5KP3u95bQpv',
	clientKey: '346HZ32z3fP4hTG2',
};

const HostedFormComp = () => {
  const [response, setResponse] = React.useState('');
  const handleSubmit = (hostedFormResponse) => {
    setResponse(JSON.stringify(hostedFormResponse, null, 2));
  };

  return (
    <div className="row" id='hosted-form-authorizenet'>
      <div className="col-1" />
      <div className="col-5 d-flex align-items-center justify-content-center">
        <HostedForm
          authData={authData}
          onSubmit={handleSubmit}
          buttonClassName="btn btn-primary"
          containerClassName="text-center"
        />
      </div>
      <div className="col-6">
        <ResponseBlock response={response} />
      </div>
    </div>
  );
};

export default HostedFormComp;