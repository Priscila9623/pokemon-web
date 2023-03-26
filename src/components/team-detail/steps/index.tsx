import React, { useCallback, useMemo } from 'react';

import { ArrowLeftOutlined, SaveFilled } from '@ant-design/icons';
import { Button, Steps as StepsAntd } from 'antd';

import './style.scss';
import { StepData, StepsProps } from './types';

function Steps(props: StepsProps) {
  const { items, onBack, onSave, saveLoading } = props;
  const currentStep = items.findIndex(
    (s) => s.inProgress || !s.conditionToBeCompleted()
  );

  const title = useCallback(
    (item: StepData) => {
      if (item.inProgress) return 'En progeso';
      if (item.conditionToBeCompleted()) return 'Completado';
      return 'En espera';
    },
    [currentStep]
  );

  const allStepsCompleted = useMemo(
    () => items.every((s) => s.conditionToBeCompleted()),
    [currentStep]
  );

  return (
    <div className="Team-detail-steps">
      <Button
        type="primary"
        icon={<ArrowLeftOutlined />}
        className="Team-detail-steps__button Team-detail-steps__button--back"
        onClick={onBack}
      />
      <StepsAntd
        current={currentStep}
        size="small"
        items={items.map((item) => ({
          title: title(item),
          description: item.description,
        }))}
        className="Team-detail-steps__handler"
      />
      <Button
        type="primary"
        htmlType="submit"
        icon={<SaveFilled />}
        disabled={!allStepsCompleted}
        className="Team-detail-steps__button Team-detail-steps__button--save"
        onClick={onSave}
        loading={saveLoading}
      />
    </div>
  );
}

export default Steps;
