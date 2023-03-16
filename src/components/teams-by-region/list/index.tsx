import React from 'react';

import {
  EditOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, List } from 'antd';

import EmptyViewList from '@components/empty-view/list';

import './style.scss';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const customizeRenderEmpty = () => (
  <EmptyViewList message="Aun no tienes equipos en esta region" />
);

function TeamsByRegionList() {
  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <List
        className="Teams-by-region-list"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                shape="circle"
                icon={<ShareAltOutlined />}
                size="middle"
                className="Teams-by-region-list__share"
              />,
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                size="middle"
                className="Teams-by-region-list__edit"
              />,
              <Button
                type="primary"
                shape="circle"
                icon={<DeleteOutlined />}
                size="middle"
                className="Teams-by-region-list__delete"
              />,
            ]}
          >
            <List.Item.Meta title={item.title} />
          </List.Item>
        )}
      />
    </ConfigProvider>
  );
}
export default TeamsByRegionList;
