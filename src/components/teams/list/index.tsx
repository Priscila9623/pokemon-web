import React, { useCallback, useState } from 'react';

import {
  EditOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, List, Modal, Spin } from 'antd';
import { Link } from 'react-router-dom';

import { useDeleteTeam } from '@api/services/firebase/teams-api';
import EmptyViewList from '@components/empty-view/list';

import Pokemons from '../pokemons';

import './style.scss';
import { TeamsListProps } from './types';

function TeamsList(props: TeamsListProps) {
  const { regionId, data = [], readonly, loading, route, refetch } = props;
  const [deleteModal, setDeleteModal] = useState({ id: '', visible: false });

  const closeDeleteModal = () => {
    setDeleteModal({ id: '', visible: false });
  };

  const onSuccessDelete = () => {
    if (refetch) refetch();
    closeDeleteModal();
  };

  const { mutate: deleteTeam, isLoading: isLoadingDelete } = useDeleteTeam({
    onSuccess: onSuccessDelete,
  });

  const onDelete = () => {
    deleteTeam({ id: deleteModal.id, region: regionId! });
  };

  const onClickDelete = (id: string) => {
    setDeleteModal({ id, visible: true });
  };

  const customizeRenderEmpty = useCallback(
    () => (
      <EmptyViewList
        message={`Aún no tienes equipos ${regionId ? 'en esta región' : ''}`}
        loading={loading}
      />
    ),
    [regionId, loading]
  );

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <Spin tip="Cargando tus equipos" size="small" spinning={loading}>
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
                    <Link
                      to={`/region/${item.regionName}/teams/${item.id}`}
                      state={{ prevRoute: route }}
                    >
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<EditOutlined />}
                        size="middle"
                        className="Teams-list__edit"
                      />
                    </Link>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<DeleteOutlined />}
                      size="middle"
                      className="Teams-list__delete"
                      onClick={() => onClickDelete(item.id!)}
                    />
                  </div>
                )
              }
            >
              <div className="Teams-list__info">
                <List.Item.Meta
                  title={item.name}
                  description={item.regionName}
                />
                <div className="Teams-list__info">
                  {item.pokemons?.length || 0} miembros
                </div>
                <div>
                  <Pokemons
                    data={item.pokemons?.map((m) => ({
                      name: m.name,
                      img: m.img,
                    }))}
                  />
                </div>
              </div>
            </List.Item>
          )}
        />
      </Spin>
      <Modal
        title="¿Estás seguro de eliminar este equipo?"
        open={deleteModal.visible}
        onOk={onDelete}
        closable={false}
        okButtonProps={{ danger: true, loading: isLoadingDelete }}
        onCancel={closeDeleteModal}
      />
    </ConfigProvider>
  );
}
export default TeamsList;
