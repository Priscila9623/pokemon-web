export type StepData = {
  description: string;
  conditionToBeCompleted: () => boolean;
  inProgress: boolean;
};

export type StepsProps = {
  items: StepData[];
  onBack: () => void;
  onSave: () => void;
};
