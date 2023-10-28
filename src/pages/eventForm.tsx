import React, { useState } from "react";
import CreateDetail from "../components/create/createDetail";
import CreatePage from "../components/create/createPage";
import CreateRsvp from "../components/create/createRsvp";
import StepIndicator from "../components/create/stepIndicator";

function EventForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<any[]>([]);
  
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    maxAttendees: "",
    eventImage: null,
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const isStepCompleted = (step: any) => {
    return completedSteps.includes(step);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCompletedSteps((prev):any => [...prev, currentStep]);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
          <CreatePage setEventInfo={setEventInfo}/>
          <div className="flex gap-10 mt-10 w-full justify-end">
            <button onClick={handleNext} className="bg-gray-100 px-4 py-2 ">다음</button>
          </div>
        </div>
      case 2:
        return <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
        <CreateDetail setEventInfo={setEventInfo}/>
        <div className="flex gap-10 mt-10 w-full justify-end">
            <button onClick={handlePrev} >이전</button>
            <button onClick={handleNext} className="bg-gray-100 px-4 py-2 ">다음</button>
          </div>
      </div>
      case 3:
        return <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
        <CreateRsvp eventInfo={eventInfo}/>
        <div className="flex gap-10 mt-10 w-full justify-end">
            <button onClick={handlePrev} >이전</button>
            <button onClick={handleNext} className="bg-gray-100 px-4 py-2 ">생성</button>
          </div>
      </div>
      default:
        return null;
    }
  };

  return <div className="h-screen pt-12">
    <StepIndicator currentStep={currentStep}/>
    {renderStepContent()}
    </div>;
}

export default EventForm;
