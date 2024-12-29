'use client'

import { useEvent, useUser } from '@/hooks'
import { Button, Form, Input, notification } from 'antd'
import { memo, useEffect } from 'react'
import { Photo } from './Photo'
import { useUpdateUserMutation } from '@/gql/updateUser'

export const Profile = memo(() => {
  const [form] = Form.useForm()
  const user = useUser()

  const [userUpdateAction, { loading }] = useUpdateUserMutation()

  const onFinish = useEvent(async params => {
    try {
      await userUpdateAction({
        variables: {
          user: {
            ...params,
            id: user?.id
          }
        }
      })
      notification.success({
        message: 'Внимание',
        description: 'Профиль успешно сохранен.',
        placement: 'topRight'
      })
    } catch (err) {
      if (err instanceof Error) {
        notification.error({
          message: 'Ошибка',
          description: err.message,
          placement: 'topRight'
        })
      }
    }
  })

  useEffect(() => {
    form.setFieldsValue(user)
  }, [form, user])

  return (
    <div className='mt-8'>
      <Form
        layout='vertical'
        form={form}
        requiredMark={false}
        onFinish={onFinish}
        className='flex items-center flex-col w-full'
      >
        <Form.Item
          name='avatar'
          className='justify-center flex'
        >
          <Photo />
        </Form.Item>
        <Form.Item
          name='firstName'
          className='max-w-96 w-full'
        >
          <Input placeholder='Введите имя' />
        </Form.Item>
        <Form.Item
          name='lastName'
          className='max-w-96 w-full'
        >
          <Input placeholder='Введите Фамилию' />
        </Form.Item>
        <Button
          type='primary'
          children='Сохранить профиль'
          onClick={form.submit}
          loading={loading}
          disabled={loading}
          className='max-w-96 w-full'
        />
      </Form>
    </div>
  )
})