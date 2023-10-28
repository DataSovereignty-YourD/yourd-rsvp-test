import React, { useEffect, useState } from 'react';

const StepIndicator = ({ currentStep }:{currentStep:number}) => {
  const [completedSteps, setCompletedSteps] = useState<any>([]);

  const isStepCompleted = (step:string) => {
    return completedSteps.includes(step);
  };

  useEffect(() => {
    if (currentStep > 1) {
      setCompletedSteps((prev:any) => {
        const newSteps = Array.from({ length: currentStep - 1 }, (_, index) => index + 1);
        return Array.from(new Set([...prev, ...newSteps]));
      });
    }
  }, [currentStep]);


  const renderStep = (step:any) => {
    return (
      <div key={step} style={{ margin: '0 10px' }}>
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: step === currentStep ? 'blue' : 'gray',
            position: 'relative'
          }}
        >
          {isStepCompleted(step) && (
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white'
              }}
            >
              ✓
            </span>
          )}
        </div>
        <span>단계 {step}</span>
      </div>
    );
  };

  return (
    <div className='flex justify-center gap-20 py-10'>
      {renderStep(1)}
      {renderStep(2)}
      {renderStep(3)}
    </div>
  );
};

export default StepIndicator;
