import { atom, selector } from "recoil";

export interface eventType {
  eventName: string;
  eventPeople: number;
  startEventDate: number;
  endEventDate: number;
  startEventTime: number;
  endEventTime: number;
  startEventMinute: number;
  endEventMinute: number;
  eventLocation: string;
}

export const eventModalState = atom({
  key: "eventModalState",
  default: false,
});

export const projectState = atom<eventType[]>({
  key: "projectState",
  default: [],
});

export const projectValue = selector({
  key: "projectValue",
  get: ({ get }) => {
    const projectInfo = get(projectState);
    return projectInfo;
  },
});

export const currenteventState = atom<eventType>({
  key: "currenteventState",
  default: {
    eventName: "",
    eventPeople: 0,
    startEventDate: 0,
    startEventMinute: 0,
    startEventTime: 0,
    endEventTime: 0,
    endEventDate: 0,
    endEventMinute: 0,
    eventLocation: "",
  },
});

export const currenteventVaule = selector<eventType>({
  key: "currenteventVaule",
  get: ({ get }) => {
    const currentevent = get(currenteventState);
    return currentevent;
  },
});
