import React, { useCallback } from 'react';

import {
  EditOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, List } from 'antd';

import EmptyViewList from '@components/empty-view/list';

import Pokemons from '../pokemons';

import './style.scss';
import { TeamsListProps } from './types';

function TeamsList(props: TeamsListProps) {
  const { regionId, data, readonly } = props;

  const customizeRenderEmpty = useCallback(
    () => (
      <EmptyViewList
        message={`Aún no tienes equipos ${regionId ? 'en esta región' : ''}`}
      />
    ),
    [regionId]
  );

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <List
        className="Teams-list"
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            extra={
              readonly ? null : (
                <div className="Teams-list__actions">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<ShareAltOutlined />}
                    size="middle"
                    className="Teams-list__share"
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<EditOutlined />}
                    size="middle"
                    className="Teams-list__edit"
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<DeleteOutlined />}
                    size="middle"
                    className="Teams-list__delete"
                  />
                </div>
              )
            }
          >
            <div className="Teams-list__details__info">
              <List.Item.Meta title={item.name} description="Región x" />
              <div className="Teams-list__details__info">
                {item.members.length} miembros
              </div>
              <div>
                <Pokemons
                  data={item.members.map((m) => ({
                    name: m.name,
                    id: m.id,
                    img: m.img,
                  }))}
                />
              </div>
            </div>
          </List.Item>
        )}
      />
    </ConfigProvider>
  );
}
export default TeamsList;
