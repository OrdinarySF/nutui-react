import React from 'react'
import Toast from './index'
import Cell from '@/packages/cell'
import Button from '@/packages/button'
import i18n from '@/packages/toast/i18n'
import { ToastWordBreakType } from '@/packages/toast'

const ToastDemo = () => {
  const { translated } = i18n()

  const textToast = (msg: string) => {
    Toast.show(msg)
  }
  const titleToast = (msg: string) => {
    Toast.show({
      content: msg,
      title: `${translated.toastTitle}`,
    })
  }
  const successToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'success',
    })
  }
  const errorToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'fail',
    })
  }
  const warningToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'warn',
    })
  }
  const loadingToast = (msg: string) => {
    Toast.show({
      content: msg,
      icon: 'loading',
    })
  }
  const duringToast = (msg: string) => {
    Toast.show({
      content: msg,
      duration: 10,
    })
  }
  const toastBottom = (msg: string) => {
    Toast.show({
      content: msg,
      style: {
        '--nutui-toast-inner-top': '90%',
      },
    })
  }
  const iconToast = (msg: string) => {
    Toast.show({
      duration: 2000,
      content: msg,
      style: {
        '--nutui-overlay-bg-color': 'rgba(0,0,0,0.7)',
      },
      closeOnOverlayClick: true,
      onClose: () => {
        console.log('closeToast')
      },
    })
  }

  const showToast = (mode: ToastWordBreakType) => {
    Toast.show({
      content: `Let's try ABCDEFGHIJKLMN here.`,
      wordBreak: mode,
    })
  }

  return (
    <>
      <div className="demo" style={{ paddingBottom: '20px' }}>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.toastText}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => textToast(`${translated.toastTextMsg}`)}
        />
        <Cell
          title={translated.toastTitle}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => titleToast(`${translated.toastTitle}`)}
        />
        <Cell
          title={translated.toastSuccess}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => successToast(`${translated.toastSuccess}`)}
        />
        <Cell
          title={translated.toastError}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => errorToast(`${translated.toastError}`)}
        />
        <Cell
          title={translated.toastWarning}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => warningToast(`${translated.toastWarning}`)}
        />
        <Cell
          title={translated.toastLoading}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => loadingToast(`${translated.toastLoading}`)}
        />
        <h2>{translated.toastDuration}</h2>
        <Cell
          title={translated.toastDurationText}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => duringToast(`${translated.toastDurationText}`)}
        />
        <Cell
          title={translated.toastAll}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            Toast.show({
              content: translated.toastAll,
              duration: 0,
              closeOnOverlayClick: true,
            })
          }}
        />
        <Button
          style={{ margin: 8 }}
          type="primary"
          shape="round"
          onClick={() => {
            Toast.clear()
          }}
        >
          {translated.toastHide}
        </Button>
        <h2>{translated.toastBottom}</h2>
        <Cell
          title={translated.toastBottom}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => toastBottom(`${translated.toastBottom}`)}
        />
        <h2>{translated.toastTransparent}</h2>
        <Cell
          title={translated.toastTransparent}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => iconToast(`${translated.toastTransparent}`)}
        />

        <h2>{translated.toastWordBreak}</h2>
        <Cell.Group>
          <Cell
            title={translated.toastWordBreak1}
            onClick={() => showToast('break-all')}
          />
          <Cell
            title={translated.toastWordBreak2}
            onClick={() => showToast('break-word')}
          />
        </Cell.Group>
      </div>
    </>
  )
}

export default ToastDemo
