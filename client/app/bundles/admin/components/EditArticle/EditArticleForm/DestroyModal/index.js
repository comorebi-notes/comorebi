import React, { PureComponent } from 'react'

import ModalCard from '../../../common/ModalCard'
import Button from '../../../form/Button'

export default class DestroyModal extends PureComponent {
  render() {
    const { loading, handleCancel, handleDestroy } = this.props
    return (
      <ModalCard>
        <ModalCard.Header>
          作品の削除
        </ModalCard.Header>
        <ModalCard.Body>
          一度削除すると復元できませんが本当によろしいですか？
        </ModalCard.Body>
        <ModalCard.Footer>
          <Button
            color="default"
            label="キャンセル"
            disabled={loading}
            handleClick={handleCancel}
          />
          <Button
            color="is-danger"
            label="削除"
            loading={loading}
            icon="trash"
            handleClick={handleDestroy}
          />
        </ModalCard.Footer>
      </ModalCard>
    )
  }
}
